class Person {
    constructor(surname) {
        this.name = "John"
        this.surname = surname
        this.fullname = this.name + ' ' + this.surname
        console.log(`${this.name} ${surname} created`)
        this.container = document.querySelector(".people")
        // this.sign()
        // this.render()
        // console.log(this.fullname)
    }

    render() {

        this.element = document.createElement('div')
        this.element.innerHTML += `
            <div class="person">
                name: ${this.name}<br>
                surname: ${this.surname}<br>
                <button class="rename-button">Rename to Mark</button>
            </div>
        `
        // console.log(this.element)
        // const button = this.element.querySelector('.rename-button')
        this.container.appendChild(this.element)
    }

    renamePersonTo(firstName) {
        this.name = firstName
    }

    // introduceYourself = () => {
    //     console.log(`My name is ${this.fullname}`);
    // }

    // sayHi = () => {
    //     console.log(`Hi`);
    // }

    // sayHiTo(name) {
    //     console.log(name);
    // }

    // sign() {
    //     document.querySelector("#signature").innerHTML = `Signed, ${this.fullname}`
    // }

}

// const introducePerson = (person) => {
//     console.log(`That person's name is ${person.fullname}`)
// }

console.log("---");


const person1 = new Person("Doe")
const person2 = new Person("Smith")

person1.renamePersonTo("Joe")

person1.render()
person2.render()

// console.log(document.querySelector("button"))

// const qsTest = document.querySelector(".qs-test")
// console.log(qsTest.querySelector("button"));
// person1.introduceYourself()
// person1.sayHi()
// person1.sayHiTo("Jane")

// console.log(person1)
// console.log(person2);

console.log(person1.element)
person1.element.style.color = "red"
// introducePerson(person1)
console.log("---");