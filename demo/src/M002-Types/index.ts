const MY_STRING_READONLY = 'Hello World';

// MY_STRING_READONLY = 'abc';

let myString = 'Hello World';
myString = 'abc';

let myOtherString: string;
myOtherString = 'abc';
// myOtherString = 123; // TS verhindert das und wirft einen Fehler. In JS waere das okay
console.log(myOtherString + '; typeof myOtherString: ' + typeof myOtherString);

const PI = 3.14159;
console.log('type of PI is ' + typeof PI);

let myNumber: number;
myNumber = 123; // int
myNumber = 12.345; // float
myNumber = 42e8; // exponential
myNumber = 42 / 11; // float (wird automatisch 'umgewandelt' waehrend in C# ein casting nach double erforderlich waere)
myNumber = 0b1010; // binary
myNumber = 0o744; // octal
myNumber = 0xff; // hex

let howAreYou: boolean = true;
console.log('typeof howAreYou: ' + typeof howAreYou); // boolean

// Mit einem 'Union Operator' (die Pipe '|') koennen wir TS sagen, dass unsere Variablen mehrere Typen zulaesst
let myBooleanOrNumber: boolean | number;
myBooleanOrNumber = true;
myBooleanOrNumber = 0;

let varWithoutValue = null;
console.log('typeof varWithoutValue: ' + typeof varWithoutValue); // object
console.log();

// Object-Type-Literal
type Person = {
    name: string;
    age: number;
};

const hugo: Person = {
    name: 'Hugo',
    age: 42,
    // isMarried: false // geht nicht weil wir das nicht im Typen definiert haben
};

// Interface
interface IPerson {
    firstName: string;
    lastName: string;
    nickName: string | undefined; // optional
    isMarried?: boolean; // wie Nickname ist dieser Parameter optionl
}

const kathi: IPerson = {
    firstName: 'Kathi',
    lastName: 'Musterfrau',
    nickName: 'Kat',
    isMarried: true,
};
console.log('typeof kathi is ' + typeof kathi); // object

// Arrays in TypeScript
let arrayOfNumbers: number[] = [1, 2, 3 /* null, undefined */];
arrayOfNumbers = [1, 2, 3];
arrayOfNumbers[8] = 55;
arrayOfNumbers.push(73);
console.log(arrayOfNumbers);

let mixedArray: (string | number | null)[] = ['a', 'b', 'c', null, 1, 2, 3];
console.log(mixedArray);

let mixedArrayWithUnkownTypes: unknown[] = [1, '42', true, [], {}, null, undefined];
console.log('type of first element of mixedArrayWithUnkownTypes is ' + typeof mixedArrayWithUnkownTypes[0]); // number
console.log('type of first element of mixedArrayWithUnkownTypes is ' + typeof mixedArrayWithUnkownTypes[1]); // string

delete mixedArrayWithUnkownTypes[0];
console.log('type of fist element now', typeof mixedArrayWithUnkownTypes[0]); // undefined

const myFunc = new Function();
console.log('typeof myFunc is ' + typeof myFunc); // function

// Union Types
type MixedType = number | undefined | 'default' | 'hugo';
let randomVar: MixedType;
randomVar = 42;
randomVar = 'default';
randomVar = 'hugo';
// randomVar = 'hugo2'; // geht nicht weil wir das nicht im Typen definiert haben
console.log('typeof randomVar is ' + typeof randomVar); // string
console.log();

// Tuples
type StringNumberPair = [string, number];
const pair: StringNumberPair = ['Hugo', 42];
pair[1] = -42;
// pair[0] = 2; // geht nicht weil kein String
// pair[2] = 2; // geht nicht weil nicht im tuple definiert
console.log('typeof pair is ' + typeof pair); // object
