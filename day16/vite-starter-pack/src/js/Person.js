export class Person {
  constructor(name = 'unknown') {
    this.name = name
  }

  introduceYourself() {
    return `Hello, my name is ${this.name}`
  }
}

const person1 = new Person('Jack');
const person2 = new Person('Ali');
const person3 = new Person();

console.log(person1.introduceYourself())

// console.log(person1)
// console.log(person2)
// console.log(person3)
