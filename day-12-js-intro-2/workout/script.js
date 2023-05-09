const seatNo = prompt("What is your seat number?")
// console.log(seatNo);

let columnNo = seatNo % 10

let tens = Math.floor(seatNo / 10)
// console.log(String.fromCharCode(66)) // B
let rowLetter = String.fromCharCode(65 + tens)

let result = rowLetter + columnNo

alert(result)