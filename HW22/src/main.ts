import { capitalize, reverseString } from "./modules/stringUtils.js";
import { Finance } from "./modules/finance.js";
import { UserManagement } from "./modules/userManagement.js";
import { generateFibonacci, generatePrimeNumbers } from "./modules/sequenceUtils.js";

//Task 1
console.log('Task 1:');

console.log(`Capitalize String: ${capitalize('typescript')}`);
console.log(`Revers String: ${reverseString('typescript')}`);

//Task 2
console.log('Task 2:');

const loan = new Finance.LoanCalculator(100000, 10, 10)
console.log(`Monthly payment: ${(loan.calculateMonthlyPayment()).toFixed(2)}`);

const tax = new Finance.TaxCalculator(5000, 19)
console.log(`Tax amount: ${(tax.calculateTax()).toFixed(2)}`);

//Task 3
console.log('Task 3:');

const user1 = new UserManagement.Admin.AdminUser('Max','max@gmail.com', false);

const user2 = new UserManagement.Admin.AdminUser('Anna','anna@gmail.com', true);

user1.displayFirstInfo();
console.log(`${user1.name}, ${user1.toggleStatus()}`);

user2.displayFirstInfo();
console.log(`${user2.name}, ${user2.toggleStatus()}`);

//Task 4
console.log('Task 4:');

console.log(`Fibonacci: ${generateFibonacci(100)}`);
console.log(`PrimeNumbers: ${generatePrimeNumbers(50)}`);





