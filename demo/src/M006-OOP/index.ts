import { Course } from './student.class';
import { createStudent, createVirtualStudent } from './stundent.func';

const hugo: Course.IStudent = new Course.StudentShort('Hugo', 'Meier');
hugo.greet();

const alex: Course.IStudent = new Course.VirtualStudent('Alex');
alex.greet();

// student.class.js mit es5 angesehen: kein class keyword
console.log();

const julia: Course.IStudent = createStudent('Julia', 'Meier');
julia.greet();

const jane = createVirtualStudent('Jane');
jane.greet();
console.log();

console.log('Typ von hugo: ', typeof hugo); // object
console.log('Typ von julia: ', typeof julia); // object
console.log('Ist hugo eine StudentShort: ', hugo instanceof Course.StudentShort); // true
console.log('Ist julia eine StudentShort: ', julia instanceof Course.StudentShort); // false
console.log('\n');

// Strukturierte Typisierung (Duck Typing)
interface IAnimal {
    name: string;
    makeSound(): void;
}

class Dog implements IAnimal {
    constructor(public name: string) {}
    makeSound(): void {
        console.log('Woof!');
    }
}

const snoopy = new Dog('Snoopy');
snoopy.makeSound();
console.log({
    instanceof: snoopy instanceof Dog, // true
    typeof: typeof snoopy, // object
});

const duffy: IAnimal = {
    name: 'Duffy',
    makeSound(): void {
        console.log('Quack!');
    },
};
duffy.makeSound();

const bunny = {
    name: 'Bugs',
    makeSound(): void {
        console.log('Whats up doc!');
    },
} as IAnimal;
bunny.makeSound();
