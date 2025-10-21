console.log("Hello, World!");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const Sam = new Person("Sam", 20);
const Alex = new Person("Alex", 25);

Sam.greet();
Alex.greet();

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
    }
  }
}

const albinAccount = new BankAccount("Albin", 1000);
albinAccount.deposit(500);
albinAccount.withdraw(200);
albinAccount.withdraw(2000);

class Animal {
  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Cat goes Meow!");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog goes Woof!");
  }
}

class Bird extends Animal {
  makeSound() {
    console.log("Bird goes Phkeng!");
  }
}

const animals = [
  (myCat = new Cat()),
  (myDog = new Dog()),
  (myBird = new Bird()),
];
animals.forEach((animal) => animal.makeSound());
