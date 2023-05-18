export class Card {
    constructor (properties) {
        this.properties = properties
        console.log(this.properties)
        this.rank = properties.rank
        // this.suit = properties.suit
        this.element = null // document.createElement('div')
        this.faceDown = false;

        this.createStartingElement()
    }

    createStartingElement() {
        this.prepareStaticHtml()
        this.attachStaticEventListeners()
        this.updateDynamicValues()
    }

    prepareStaticHtml() {
        this.element = document.createElement('div')
        this.element.className = `card ${this.properties.suit}`
        this.element.innerHTML = `
            <h2 class="rank"></div>
        `
        this.rankElement = this.element.querySelector('h2')
    }

    attachStaticEventListeners() {
        this.element.addEventListener('click', () => {
            // console.log("Future rank: "+ Number(this.rank + 1))
            this.rank += 1
            this.updateDynamicValues()
        })
    }

    updateDynamicValues() {
        this.rankElement.textContent = this.rank
    }
}