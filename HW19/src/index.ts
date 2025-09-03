// task 1
console.log('Task 1: ');

interface SumEvenNumbers {
    (array: number[]): number;
} 

const sumEvenNumbers: SumEvenNumbers = (array) => {
    return array.reduce((acc, number) => (number%2 === 0 ? acc + number : acc), 0) 
}

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Sum of even numbers: ', sumEvenNumbers(arr));

// task 2
console.log('Task 2: ');


interface StringToBooleanFunction {
  (str: string): boolean;
}

const isEmptyString: StringToBooleanFunction = str => str.length === 0;

console.log('String is empty: ', isEmptyString(''));
console.log('String is empty: ', isEmptyString('Hello'));

// task 3
console.log('Task 3: ');

type CompareStrings = (str1: string, str2: string) => boolean;

const areStringsEqual: CompareStrings = (str1, str2) => str1 === str2;

console.log('String are equal: ', areStringsEqual('TypeScript', 'TypeScript'));
console.log('String are equal: ', areStringsEqual('TypeScropt', 'TS'));

// task 4
console.log('Task 4: ');

function getLastElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

console.log(getLastElement<number>([1, 2,4, 8, 50]));
console.log(getLastElement<string>(['kiwi', 'apple', 'mango']));
console.log(getLastElement([]));

// task 5
console.log('Task 5: ');

function makeTriple<T>(a: T, b: T, c: T): T[] {
    return [a, b, c];
}

console.log(makeTriple<number>( 10, 20, 30));
console.log(makeTriple<string>( 'Max', 'Paul', 'Leo'));
console.log(makeTriple<boolean>( true, false, true));






