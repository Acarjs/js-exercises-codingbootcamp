import { Card } from "./components/Card";
import { Hand } from "./components/Hand";

// const card = new Card({rank: 1, suit: "diamond"});
// document.querySelector("#target").appendChild(card.element)

// const card2 = new Card({rank: 7, suit: "spade"});
// document.querySelector("#target").appendChild(card2.element)

// console.log(card)

const hand = new Hand
document.querySelector("#target-for-hand").appendChild(hand.element)

console.log(hand);