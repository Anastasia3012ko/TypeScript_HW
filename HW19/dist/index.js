"use strict";
// task 1
console.log('Task 1: ');
const sumEvenNumbers = (array) => {
    return array.reduce((acc, number) => (number % 2 === 0 ? acc + number : acc), 0);
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Sum of even numbers: ', sumEvenNumbers(arr));
// task 2
console.log('Task 2: ');
const isEmptyString = str => str.length === 0;
console.log('String is empty: ', isEmptyString(''));
console.log('String is empty: ', isEmptyString('Hello'));
// task 3
console.log('Task 3: ');
const areStringsEqual = (str1, str2) => str1 === str2;
console.log('String are equal: ', areStringsEqual('TypeScript', 'TypeScript'));
console.log('String are equal: ', areStringsEqual('TypeScropt', 'TS'));
// task 4
console.log('Task 4: ');
function getLastElement(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
}
console.log(getLastElement([1, 2, 4, 8, 50]));
console.log(getLastElement(['kiwi', 'apple', 'mango']));
console.log(getLastElement([]));
// task 5
console.log('Task 5: ');
function makeTriple(a, b, c) {
    return [a, b, c];
}
console.log(makeTriple(10, 20, 30));
console.log(makeTriple('Max', 'Paul', 'Leo'));
console.log(makeTriple(true, false, true));
//# sourceMappingURL=index.js.map