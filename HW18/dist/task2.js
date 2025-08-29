"use strict";
const car = {
    make: 'Audi',
    model: 'Q7',
    engine: {
        type: '3.0L V6 Turbo',
        horsepower: 355
    }
};
function printInfoAboutCar(car) {
    for (const key in car) {
        const value = car[key];
        if (typeof value === 'object') {
            for (const subKey in value) {
                console.log(`${subKey}: ${value[subKey]}`);
            }
        }
        else {
            console.log(`${key}: ${value}`);
        }
    }
}
printInfoAboutCar(car);
//# sourceMappingURL=task2.js.map