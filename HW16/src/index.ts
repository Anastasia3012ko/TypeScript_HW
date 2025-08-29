// task 1

function greetUser(name: string): void {
    console.log(`Task 1. Hello , ${name}!`);
} 

greetUser('Alex');

// task 2

interface Person {
    name: string;
    age: number;
    city: string;
}

function printPersonInfo (person: Person): void {
    console.log(`Task 2. Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
}

const newPerson: Person = {
    name: 'Anastasia',
    age: 40,
    city: 'Kolbingen'
}
printPersonInfo(newPerson);

// task 3

function squareNumber(num: number): number {
  return num * num;
}
const number: number = 5;
console.log(`Task 3: squareNumber: ${squareNumber(number)}`);

// task 4

function isEven (number: number): boolean {
    return number % 2 === 0;
}
console.log(`Task 4.1 Number 5 is even number: ${isEven(5)}`);
console.log(`Task 4.2 Number 100 is even number: ${isEven(100)}`);

// task 5

interface Student {
    name: string;
    grade: number;
}

function printStudentInfo (student: Student): void {
    console.log(`Task 5. Student ${student.name} with grade ${student.grade}`);
    
}

const studentOne: Student = {
    name: 'Max',
    grade: 1
}

printStudentInfo(studentOne);

// task 6

function logMessage (message: string): void {
    console.log(`Task 6. ${message}`);
    
} 

logMessage('I learn TypeScript')