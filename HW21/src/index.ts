// task 1
console.log('Task 1: ');

abstract class Animal {
   abstract makeSound(): string;
}

class Dog extends Animal {
    makeSound(): string {
        return 'Bark'
    }
}
class Cat extends Animal {
    makeSound(): string {
        return 'Meow'
    }
}

const animal: Animal[] = [
    new Cat(),
    new Dog()
] 
console.log('Animal make sound:');
animal.forEach(item => console.log(item.makeSound()));

// task 2
console.log('Task 2: ');

abstract class Shape {
    abstract name: string;
    abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
    abstract color: string
}

class ColoredCircle extends ColoredShape {
    name = 'Circle';
    color = 'brown'
    constructor(public radius: number){
        super()
    }
    calculateArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class ColoredRectangle extends ColoredShape {
    name = 'Rectangle';
    color = 'yellow'
    constructor(public width: number, public height: number){
        super()
    }
    calculateArea(): number {
        return this.width * this.height
    }
}
 
const circle = new ColoredCircle(5);
const rectangle =  new ColoredRectangle(5, 10);
console.log(circle);
console.log(`Aria circle: ${circle.calculateArea().toFixed(2)}`);
console.log(rectangle);
console.log(`Aria rectangle: ${rectangle.calculateArea()}`);

// task 3
console.log('Task 3: ');

abstract class Appliance {
    abstract turnOn(): void;
    abstract turnOff(): void;
}
class WashingMachine extends Appliance {
    turnOn(): void {
        console.log('Washing machine is turned on');
        
    }
    turnOff(): void {
        console.log('Washing machine is turned off');
        
    }
}

class Refrigerator extends Appliance {
    turnOn(): void {
        console.log('Refrigerator is turned on');
        
    }
    turnOff(): void {
        console.log('Refrigerator is turned off');
        
    }
}

const appliances: Appliance[] = [
  new WashingMachine(),
  new Refrigerator(),
];
appliances.forEach(appliance => {
    appliance.turnOn(), 
    appliance.turnOff()
});

// task 4
console.log('Task 4: ');

abstract class Account {
    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  constructor(private balance: number, private rate: number) {
    super();
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount} into SavingsAccount. Balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient funds in SavingsAccount.");
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount} from SavingsAccount. Balance: ${this.balance}`);
    }
  }

  addInterest(): void {
    const interest = (this.balance * this.rate) / 100;
    this.balance += interest;
    console.log(`Interest of ${interest} added. Balance: ${this.balance}`);
  }
}

class CheckingAccount extends Account {
  constructor(private balance: number, private fee: number) {
    super();
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount} into CheckingAccount. Balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    const total = amount + this.fee;
    if (total > this.balance) {
      console.log("Insufficient funds in CheckingAccount.");
    } else {
      this.balance -= total;
      console.log(
        `Withdrew ${amount} + fee ${this.fee} from CheckingAccount. Balance: ${this.balance}`
      );
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

abstract class  Media {
   abstract play(): void;
}
class Audio extends Media {
    play(): void {
        console.log('Playing audio');
        
    }
}
class Video extends Media {
    play(): void {
        console.log('Playing video');
        
    }
}

const media: Media[]= [
    new Audio(),
    new Video()
]
media.forEach(item => item.play());