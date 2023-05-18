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
            if (this.rank < 13) {
                this.rank += 1
            }
            this.updateDynamicValues()
        })
    }

    updateDynamicValues() {
        let rank
        switch (this.rank) {
            case 1:
                rank = "A"
                break;

            case 11:
                rank = "J"
                break;

            case 12:
                rank = "Q"
                break;

            case 13:
                rank = "K"
                break;

            default:
                rank = this.rank
                break;
        }
        this.rankElement.textContent = rank
    }
}