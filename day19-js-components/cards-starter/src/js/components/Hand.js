import { Card } from "./Card"

export class Hand {
    constructor() {
        this.cardsData = [
            {rank: 1, suit: "diamond"},
            {rank: 7, suit: "spade"},
            {rank: 13, suit: "heart"},
            {rank: 12, suit: "club"},
        ]
        this.createStartingElement()
    }

    createStartingElement() {
        this.prepareStaticHtml()
        this.attachStaticEventListeners()
        this.updateDynamicValues()
    }

    prepareStaticHtml() {
        this.element = document.createElement('div')
        this.element.className = `hand`
        this.element.innerHTML = `
            <button id="button-draw">DRAW CARD</button><br>
            <div class="cards-container"></div>
        `
        const card = new Card({rank: 1, suit: "diamond"});
        this.cardsContainer = this.element.querySelector(".cards-container")
        this.cardsContainer.appendChild(card.element)
    }

    attachStaticEventListeners() {

    }

    updateDynamicValues() {

    }
}