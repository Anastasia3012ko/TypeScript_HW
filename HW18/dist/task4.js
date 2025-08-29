"use strict";
const employees = [
    { name: "Alice", salary: 5000 },
    { name: "Bob", salary: 6000 },
    { name: "John", salary: 7000 },
];
function showSalaries(employees) {
    return employees.map(employee => employee.salary);
}
console.log('Employees salaries: ', showSalaries(employees));
//# sourceMappingURL=task4.js.map