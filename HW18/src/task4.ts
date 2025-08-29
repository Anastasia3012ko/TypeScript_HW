interface Employee {
    name: string;
    salary: number;
}

const employees: Employee[] = [
    { name: "Alice", salary: 5000 },
    { name: "Bob", salary: 6000 },
    { name: "John", salary: 7000 },
];

function showSalaries(employees: Employee[]): number[] {
    return employees.map(employee => employee.salary);
}

console.log('Employees salaries: ', showSalaries(employees));

