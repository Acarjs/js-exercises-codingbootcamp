import { Card } from "./Card"

export class Hand {
    constructor() {
        this.cardsData = [
            {rank: 1, suit: "diamond"},
            {rank: 7, suit: "spade"},
            {rank: 13, suit: "heart"},
            {rank: 12, suit: "club"},
        ]
        this.lastClickedCard = 0
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
            <h3>Last clicked card: <span></span></h3>
            <div class="cards-container"></div>
        `
        this.cardsContainer = this.element.querySelector(".cards-container")
        this.lastClickedCardElement = this.element.querySelector("span")
    }

    attachStaticEventListeners() {
        this.element.querySelector("#button-draw").addEventListener('click', () => {
            console.log("drawing card");
            const newCardData = this.generateCardData()
            this.cardsData.push(newCardData)
            this.updateDynamicValues()
        })
    }

    updateDynamicValues() {
        this.lastClickedCardElement.textContent = this.lastClickedCard
        this.cardsContainer.innerHTML = ""
        this.cardsData.forEach((cardData, index) => {
            const card = new Card(cardData, this.setLastClickedCard, index);
            this.cardsContainer.appendChild(card.element)
        })
    }

    generateCardData() {
        let rank = Math.ceil(Math.random() * 13)

        const suitIndex = Math.floor(Math.random() * 4)
        const suitArray = ["heart", "diamond", "spade", "club"];

        const suit = suitArray[suitIndex];
        // generats object {rank: valueOfRank, suit: valueOfSuit}
        return {rank, suit}
    }

    // lastClickedCard is actually an index of the card
    // in the settings
    setLastClickedCard = (lastClickedCard) => {
        this.lastClickedCard = lastClickedCard
        this.updateDynamicValues()
    }

    // setLastClickedCard() {
    //     console.log(this);
    //     this.lastClickedCard = 2
    //     this.updateDynamicValues()
    // }
}