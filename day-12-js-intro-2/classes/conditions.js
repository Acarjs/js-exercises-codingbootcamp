const condition = false


// console.log(Boolean(undefined));

// if (0 === '0') {
//     console.log("TRUE!!!");
// } else {
//     console.log("FALSE!!!");
// }



// if (age > 17) {
//     console.log("You can buy alcohol");
// } else if (age > 14) {
//     console.log("You can buy alcohol, but don't tell anyone");
// } else if (age > 10) {
//     console.log("Umm nope");
// } else if (age >= 0) {
//     console.log("How did you even get in here?")
// } else {
//     console.log("That's impossible");
// }

// const age = 17

// switch (age) {
//     case 18:
//         console.log("Oh man, lucky you!");
//         break;

//     case "12":
//         console.log("Cool, but say the NUMBER");
//         break;

//     default:
//         console.log("I don't know what to say");
//         break;
// }

// switch (true) {
//     case age > 17:
//         console.log("You're an adult");
//         break;
//     case age > 16:
//         console.log("One more year");

//     default:
//         console.log("Get lost, kiddo");
//         break;
// }

// if (2) {
//     console.log("IF 2 is TRUE");
// }

// switch (true) {
//     case 2:
//         console.log("SWITCH 2 is TRUE");
//         break;

//     default:
//         break;
// }

// a + b
// a * b
// a + (b * c)

// a || b
// a && b
// a || (b && c)

// true && false && ... // false
// false || true || ... // true

// 1 * 1 * 1 * 1 * 0 * ... // 0
// 0 + 0 + 1 + ... // >0

// console.log("lunch" && "fries" && 0 && "water")

const userInput = "Hi"

// const logUserInput = () => {
//     console.log(userInput);
// }

// userInput && logUserInput()

// if (userInput) {
//     logUserInput()
// }

const usersAgeInputValue = ''; // user forgot to fill in the gender input

const age = usersAgeInputValue || 17  // the default value is 17

// let i = 1
// while (i <= 32) {
//     console.log(i);
//     i = i * 2
// }

// let amount = 10000
// let year = 0
// console.log(amount);
// while (amount < 20000) {
//     if (year == 8) {
//         console.log("Bankrupt!!!")
//         break
//     }
//     year++
//     if (year < 5) {
//         console.log(`Amount after ${year} year(s) is ${amount}`)
//         continue
//     }
//     amount = amount * 1.028
//     console.log(`Amount after ${year} year(s) is ${amount}`)
//     // if loop hits the continue, we're here
// }

// if loop hits the brake, we're here

// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

// for (let i = 0; i < 0; i++) {
//     console.log(i)
// }

// let amount = 10000

// for (let year = 1; year <= 6; year++) {
//     amount = amount * 1.028
//     console.log(`Amount after ${year} year(s) is ${amount}`)
// }

myElement = document.querySelector("h2")

console.log(myElement.innerHTML);

console.log(myElement.getAttribute('class'));

// myElement.innerHTML = "Changed"
myElement.innerHTML += "!!!"

// myElement.innerHTML = "Changed!!!"

// myElement.style.color = "red"

console.log(myElement.classList);

myElement.classList.remove("heading-2")

myElement.style.backgroundColor = "blue"

const readInput = () => {
    console.log('reading input')
    const input = document.querySelector('input[name="first_name"]')
    console.log(input.value);
}