"use strict";
// task 1
function greetUser(name) {
    console.log(`Task 1. Hello , ${name}!`);
}
greetUser('Alex');
function printPersonInfo(person) {
    console.log(`Task 2. Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
}
const newPerson = {
    name: 'Anastasia',
    age: 40,
    city: 'Kolbingen'
};
printPersonInfo(newPerson);
// task 3
function squareNumber(num) {
    return num * num;
}
const number = 5;
console.log(`Task 3: squareNumber: ${squareNumber(number)}`);
// task 4
function isEven(number) {
    return number % 2 === 0;
}
console.log(`Task 4.1 Number 5 is even number: ${isEven(5)}`);
console.log(`Task 4.2 Number 100 is even number: ${isEven(100)}`);
function printStudentInfo(student) {
    console.log(`Task 5. Student ${student.name} with grade ${student.grade}`);
}
const studentOne = {
    name: 'Max',
    grade: 1
};
printStudentInfo(studentOne);
// task 6
function logMessage(message) {
    console.log(`Task 6 ${message}`);
}
logMessage('I learn TypeScript');
//# sourceMappingURL=index.js.map