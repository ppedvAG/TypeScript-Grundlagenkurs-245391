import { promisify } from 'util';

console.log('Start module M007-Promises');

setTimeout(() => console.log('hello'), 2000);

// Evolutionsschritt 1: Callback function
// --------------------------------------

let opIndex = 0;
type Foo = { bar: number };
let result: Foo | null = null;

function longRunningOperation<T>(): T {
    console.log('long running operation...', ++opIndex);
    return {
        bar: 42,
    } as T;
}

const callback = () => (result = longRunningOperation<Foo>());

// Damit die Operation den Main Thread nicht blockiert fuehren wir sie asynchron aus

setTimeout(callback, 0);

console.log('Ergebnis der langlaufenden Operation: ', JSON.stringify(result));
console.log();

// Evolutionsschritt 2: Callback functions in Promises kapseln
// -----------------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

function createPromise(delay: number): Promise<Foo> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const result = longRunningOperation<Foo>();

                if (delay > 5000) {
                    throw new Error('long running operation failed');
                }

                // Hier loesen wir das Promise auf und geben das Ergebnis zurueck
                resolve(result);
            } catch (error) {
                // Wenn die long running operation fehl schlaegt
                reject(error);
            }
        }, delay);
    });
}

const promiseOkay = createPromise(1000);
promiseOkay
    .then((result) => console.log('Evo2: promise resolved', result))
    .catch((error) => console.error('Evo2: promise rejected', error))
    .finally(() => console.log('Evo2: clean up stuff')); // wird immer ausgefuehrt

const promiseFail = createPromise(9000);
promiseFail
    .then((result) => console.log('Evo2: promise resolved', result))
    .catch((error) => console.error('Evo2: promise rejected'))
    .finally(() => console.log('Evo2: clean up stuff')); // wird immer ausgefuehrt

// Problem mit Promises: Callback Hell!!!
// Deshalb fuer bessere Lesbarkeit wurde das async/await Pattern eingefuehrt

// Evolutionsschritt 3: async/await
// --------------------------------
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

async function fetchDataFromLongRunningOperation(): Promise<Foo> {
    const result = await createPromise(1000);
    console.log('Evo3 wurde asynchron ausgefuehrt: ', JSON.stringify(result));

    try {
        const failing = await createPromise(9000);
    } catch (error) {
        console.error('Evo3 mit gefangenem Fehler');
    }
    return result;
}

fetchDataFromLongRunningOperation();

// Beispiel: API abfragen mit der nodejs fetch API
// ------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const url = 'https://catfact.ninja/fact';

type CatFact = {
    fact: string;
    length: number;
};

async function fetchCatFact() {
    try {
        const response: Response = await fetch(url);
        const catFact: CatFact = await response.json();
        console.log('Wusstest du ueber Katzen... \n\t', catFact.fact);
    } catch (error) {
        console.error('Da ist was schief gelaufen', error);
    }
}

// selfinvoking function: Selbstaufrunfende Funktionen die wir asynchron machen koennen
(async () => {
    await fetchCatFact();
})();

// Beispiel Callback zu einem Promise machen um es awaiten zu koennen

// npm install -D @types/node um Typinformationen von dem node environment zu bekommen
const debounce1sec = promisify(() => setTimeout(() => {}, 1000));
(async () => {
    // debounce ist sehr praktisch um Benutzereingaben zu "entprellen"
    await debounce1sec();
})();
