import { Course } from './student.class';

// Alternative zu Klassen
export function createStudent(firstName: string, lastName: string): Course.IStudent {
    // Lokale Variablen sind wie Felder in Klassen
    const fullName = `${firstName} ${lastName}`;

    return {
        firstName,
        lastName,
        fullName,
        greet(): void {
            console.log(this.fullName + ' says "Hello"!');
        },
    };
}

// Auch mit "Vererbung"
export function createVirtualStudent(nickName: string): Course.IStudent {
    // Vererbung mittels Composition geloest
    const student = createStudent(nickName, '');

    const VirtualStudent = {
        ...student,
        greet(): void {
            // Methode der Basisklasse aufrufen
            student.greet();
            console.log('I am a virtual student!');
        },
    };
    return VirtualStudent;
}
