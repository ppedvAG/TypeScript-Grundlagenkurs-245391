export namespace Course {
    export interface IStudent {
        firstName: string;
        lastName: string;
        fullName: string;
        greet(): void;
    }

    export class StudentExplicit implements IStudent {
        firstName: string;
        lastName: string;
        fullName: string;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = `${firstName} ${lastName}`;
        }

        greet(): void {
            console.log(this.fullName + ' says "Hello"!');
        }
    }

    export class StudentShort implements IStudent {
        fullName: string;

        constructor(public firstName: string, public lastName: string) {
            this.fullName = `${firstName} ${lastName}`;
        }

        greet(): void {
            console.log(this.fullName + ' says "Hello"!');
        }
    }

    export class VirtualStudent extends StudentShort {
        constructor(nickName: string) {
            // Konstruktor der Basisklasse aufrufen und nickName als Vorname uebergeben
            super(nickName, '');
        }

        override greet(): void {
            // Methode der Basisklasse aufrufen
            super.greet();
            console.log('I am a virtual student!');
        }
    }
}
