let value: unknown = 'Hello World';
value = 42; // typeof value === 'number'
// value.toFixed(); // Error weil value is unkown

let number = 42;
number.toFixed(2); // .toFixed() ist eine Methode von Number

// Type Assertion (!= Type Casting in C#, d. h. der Typ wird nicht umgewandelt sondern)
// wir sagen dem TS-Compiler, dass es sich hier sicher um eine Zahl handelt)
let newValue = (<number>value).toFixed(2);
console.log('newValue: ' + newValue);

value = 'string';
// Laufzeitfehler: toFixed() is not a function
// let stringValue = (<number>value).toFixed(2);
// console.log('stringValue: ' + stringValue);

const someDate = new Date(1990, 1, 1);
console.log('typeof someDate is ' + typeof someDate); // object
console.log('someDate instanceof Date is ' + (someDate instanceof Date)); // true

interface IDate {
    year: number;
    month: number;
    day: number;
}

const date: IDate = {
    year: 1990,
    month: 1,
    day: 1,
};
console.log('typeof date is ' + typeof date); // object
// console.log('date instanceof Date is ' + (date instanceof IDate)); // geht nicht weil instanceof nur auf eine Klasse angwendet werden kann
// vgl. index.js: Keine Typinformationen vorhanden, d. h. IDate ist nicht vorhanden
console.log('date instanceof Date is ' + (date instanceof Date)); // false

// in ist ein operator in JS
console.log('check by property', 'year' in date); // true
console.log('check by property', 'foo' in date); // false
console.log();

function someAmbigiousFunc(value: string | number) {
    if (typeof value === 'number') {
        const valueAsString = value.toFixed(2);
        console.log('valueAsString ist jetzt ein string: ' + valueAsString);
    } else if (value.match('Hello')) {
        console.log('TS weiss implizit, dass es ein string sein muss weil bereits assertion von number erfolgt ist.');
    }
}

// Type Casting vs. Type Assertion
let someNumberString = '0';
// let castedNumber = <number>someNumberString; // geht nicht weil Type Assertion und kein Casting
let num1 = parseInt(someNumberString); // Casting zu number
let num2 = Number(someNumberString); // ebenso
let numShort = +someNumberString; // Kurzform
console.log('converted to num', num1, typeof num1);

let bool = Boolean(num2); // Casting zu boolean
let boolShort = !!num2; // Kurzform
console.log('converted to bool', bool, typeof bool);

let numAsString = num1.toString(); // Casting zu string
let boolAsString = String(bool); // Casting zu string
let boolAsStringShort = '' + boolShort; // Kurzform

let undefinedBool: boolean;
let undefinedBoolAsString = `${undefinedBool!}`; // mit ! koennen wir sicherstellen, dass undefinedBool nicht undefined ist
console.log('undefinedBoolAsString', undefinedBoolAsString);
console.log();

function repeatString(text: string, times?: number): string | undefined {
    if (times !== undefined && times | 0) {
        return text.repeat(times || 1);
    }
    return undefined;
}
function repeatStringDefault(text: string, times = 5): string {
    return text.repeat(times);
}

console.log('1 star', repeatString('🌟', 1));
console.log('5 star', repeatStringDefault('🌟'));

let add = (a: number, b: number) => a + b;
console.log('add 10 + 20 =', add(10, 20));

console.log(`String templates with variables
    ${num1}
    and very long string
    ${boolAsStringShort}
`);

function myGreeting(strings: TemplateStringsArray, personExp: string, ageExp: number) {
    const ageStr = ageExp < 100 ? 'youngster' : 'centenearian';
    return `${strings[0]}${personExp}${strings[1]}${ageStr}${strings[2]}`;
}

const alex = 'Alex';
const age = 29;
const output = myGreeting`Hello ${alex}, you are ${age}`;
console.log(output);

function printAll(strs: string | string[] | null) {
    // if (typeof strs === "object") {
    if (Array.isArray(strs)) {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === 'string') {
        console.log(strs);
    } else {
        // do nothing
    }
}
