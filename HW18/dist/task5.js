function printStudent(student) {
    for (const key in student) {
        console.log(`${student[key]}`);
    }
}
const student = {
    firstName: 'Max',
    lastName: 'Petrov',
    grade: 10
};
printStudent(student);
export {};
//# sourceMappingURL=task5.js.map