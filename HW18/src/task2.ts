interface Car {
    make: string;
    model: string;
    engine: Engine;
    year?: number;
}
interface Engine {
    type: string;
    horsepower: number;
}

const car: Car = {
    make: 'Audi',
    model: 'Q7',
    engine: {
        type: '3.0L V6 Turbo',
        horsepower: 355
    }
}
function printInfoAboutCar(car: Car): void {
    for(const key in car){
        const value = car[key as keyof Car]
        if(typeof value === 'object'){
            for(const subKey in value) {
               console.log(`${subKey}: ${value[subKey as keyof Engine]}`);
               
            }
        } else {
            console.log(`${key}: ${value}`);
            
        }
    }
}

printInfoAboutCar(car);
