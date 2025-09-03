// task 1
console.log('Task 1:');


class Animal {
    constructor(public name: string, public species: string) {}

    public sound(): void {
        console.log('The animal makes a sound');
    }
}

class Dog extends Animal {
    constructor(name: string, species: string, public breed: string) {
        super(name, species)
    }
    public sound(): void {
        console.log('The dog barks');
    }

}

const animal =  new Animal('Keks','cat')
console.log(animal);
animal.sound();

const dog =  new Dog('Muffin', 'dog', 'labrador');
console.log(dog);
dog.sound();

// task 2
console.log('Task 2:');

class Library {
    public static totalBooks: number = 0;
    constructor(public title: string) {}

    public addBook(): void {
        Library.totalBooks++;
        console.log(`Book added: ${this.title}. Number of books: ${Library.totalBooks}`);
        
    }
}

const book1 = new Library('Book1');
const book2 = new Library('Book2');
const book3 = new Library('Book3');
const book4 = new Library('Book4');
book1.addBook();
book2.addBook();
book3.addBook();
book4.addBook();

//task 3
console.log('Task3:');

class Vehicle {
    constructor(public make: string, public model: string) {}

}

class Motorcycle extends Vehicle {
    constructor(make: string, model: string, public type: string) {
        super(make, model)
    }
}

const vehicle = new Vehicle('BMW', 'X5');
const motorcycle = new Motorcycle('BMW', 'XXX', 'YYY');
console.log('Vehicle: ', vehicle);
console.log('Motorcycle: ', motorcycle);





