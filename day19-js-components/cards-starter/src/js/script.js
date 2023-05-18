import { Card } from "./components/Card";

const card = new Card({rank: 4, suit: "diamond"});
document.querySelector("#target").appendChild(card.element)

// const card2 = new Card({rank: 7, suit: "spade"});
// document.querySelector("#target").appendChild(card2.element)

console.log(card)