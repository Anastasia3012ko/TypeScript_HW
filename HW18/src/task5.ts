import { log } from "console";

interface Person {
    firstName: string;
    lastName: string;
}
interface Student extends Person {
    grade: number;
}

function printStudent(student: Student): void {
    for(const key in student){
        console.log(`${student[key as keyof Student]}`);
    }
}

const student: Student = {
    firstName: 'Max',
    lastName: 'Petrov',
    grade: 10
}
printStudent(student)