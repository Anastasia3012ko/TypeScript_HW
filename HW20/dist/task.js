"use strict";
// task 1
console.log('Task 1:');
class Animal {
    name;
    species;
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    sound() {
        console.log('The animal makes a sound');
    }
}
class Dog extends Animal {
    breed;
    constructor(name, species, breed) {
        super(name, species);
        this.breed = breed;
    }
    sound() {
        console.log('The dog barks');
    }
}
const animal = new Animal('Keks', 'cat');
console.log(animal);
animal.sound();
const dog = new Dog('Muffin', 'dog', 'labrador');
console.log(dog);
dog.sound();
// task 2
console.log('Task 2:');
class Library {
    title;
    static totalBooks = 0;
    constructor(title) {
        this.title = title;
    }
    addBook() {
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
    make;
    model;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
class Motorcycle extends Vehicle {
    type;
    constructor(make, model, type) {
        super(make, model);
        this.type = type;
    }
}
const vehicle = new Vehicle('BMW', 'X5');
const motorcycle = new Motorcycle('BMW', 'XXX', 'YYY');
console.log('Vehicle: ', vehicle);
console.log('Motorcycle: ', motorcycle);
//# sourceMappingURL=task.js.map