import Calculator from './Calculator';

type Sate = {
    productsAmount:number,
    totalPrice:number,
    boxSize:string
}

export default class MainInfo {
    state: Sate;

    constructor({ productsAmount, totalPrice, boxSize }) {
        this.state = {
            productsAmount: productsAmount,
            totalPrice: totalPrice,
            boxSize: boxSize,
        }
    }

    setState(state: Sate) {
        this.state = state
    }

    addTotalPrice(price: number) {
        this._decreaseProductAmount();
        this.state.totalPrice += price;
    }

    // TODO
    _increaseProductAmount() {}

    _decreaseProductAmount() {
        this.state.productsAmount -= 1;

        if (this.state.productsAmount === 0) {
            this.activateForm();
        }
    }

    renderCalculatedProperties() {
        const article = document.querySelector('#article');

        const calculator = new Calculator({
            price: this.state.totalPrice,
            amount: this.state.productsAmount,
        });  

        article.insertAdjacentElement('beforeend', calculator.render());
    }

    updateCalculatedProperties() {
        const calculator = new Calculator({
            price: this.state.totalPrice,
            amount: this.state.productsAmount,
        })
        calculator.updateInfo();
    }

    activateForm() {
        const form = document.querySelector('#giftboxForm');

        form.classList.remove('_disabled');
        form.querySelectorAll('[disabled]').forEach(item => {
            item.removeAttribute('disabled');         
        });

        const formCalculator = form.querySelector('.giftbox__multiply');
        const numberElement = formCalculator.querySelector('.giftbox__number');
        const plusButton = formCalculator.querySelector('.plus');
        const minusButton = formCalculator.querySelector('.minus');

        plusButton.addEventListener('click', () => {
            numberElement.innerHTML = String((Number.parseInt(numberElement.innerHTML) + 1));
        });
        
        minusButton.addEventListener('click', () => {
           if (Number.parseInt(numberElement.innerHTML) > 1) numberElement.innerHTML = String((Number.parseInt(numberElement.innerHTML) - 1));
        });
    }
}
