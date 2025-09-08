"use strict";
// task 1
console.log('Task 1: ');
class Animal {
}
class Dog extends Animal {
    makeSound() {
        return 'Bark';
    }
}
class Cat extends Animal {
    makeSound() {
        return 'Meow';
    }
}
const animal = [
    new Cat(),
    new Dog()
];
console.log('Animal make sound:');
animal.forEach(item => console.log(item.makeSound()));
// task 2
console.log('Task 2: ');
class Shape {
}
class ColoredShape extends Shape {
}
class ColoredCircle extends ColoredShape {
    radius;
    name = 'Circle';
    color = 'brown';
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class ColoredRectangle extends ColoredShape {
    width;
    height;
    name = 'Rectangle';
    color = 'yellow';
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new ColoredCircle(5);
const rectangle = new ColoredRectangle(5, 10);
console.log(circle);
console.log(`Aria circle: ${circle.calculateArea().toFixed(2)}`);
console.log(rectangle);
console.log(`Aria rectangle: ${rectangle.calculateArea()}`);
// task 3
console.log('Task 3: ');
class Appliance {
}
class WashingMachine extends Appliance {
    turnOn() {
        console.log('Washing machine is turned on');
    }
    turnOff() {
        console.log('Washing machine is turned off');
    }
}
class Refrigerator extends Appliance {
    turnOn() {
        console.log('Refrigerator is turned on');
    }
    turnOff() {
        console.log('Refrigerator is turned off');
    }
}
const appliances = [
    new WashingMachine(),
    new Refrigerator(),
];
appliances.forEach(appliance => {
    appliance.turnOn(),
        appliance.turnOff();
});
// task 4
console.log('Task 4: ');
class Account {
}
class SavingsAccount extends Account {
    balance;
    rate;
    constructor(balance, rate) {
        super();
        this.balance = balance;
        this.rate = rate;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into SavingsAccount. Balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds in SavingsAccount.");
        }
        else {
            this.balance -= amount;
            console.log(`Withdrew ${amount} from SavingsAccount. Balance: ${this.balance}`);
        }
    }
    addInterest() {
        const interest = (this.balance * this.rate) / 100;
        this.balance += interest;
        console.log(`Interest of ${interest} added. Balance: ${this.balance}`);
    }
}
class CheckingAccount extends Account {
    balance;
    fee;
    constructor(balance, fee) {
        super();
        this.balance = balance;
        this.fee = fee;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into CheckingAccount. Balance: ${this.balance}`);
    }
    withdraw(amount) {
        const total = amount + this.fee;
        if (total > this.balance) {
            console.log("Insufficient funds in CheckingAccount.");
        }
        else {
            this.balance -= total;
            console.log(`Withdrew ${amount} + fee ${this.fee} from CheckingAccount. Balance: ${this.balance}`);
        }
    }
}
const savings = new SavingsAccount(3000, 10);
savings.deposit(500);
savings.withdraw(1000);
savings.addInterest();
const checking = new CheckingAccount(3000, 10);
checking.deposit(1000);
checking.withdraw(1200);
checking.withdraw(3100);
// task 5
console.log('Task 5: ');
class Media {
}
class Audio extends Media {
    play() {
        console.log('Playing audio');
    }
}
class Video extends Media {
    play() {
        console.log('Playing video');
    }
}
const media = [
    new Audio(),
    new Video()
];
media.forEach(item => item.play());
//# sourceMappingURL=index.js.map