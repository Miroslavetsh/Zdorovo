export default class Calculator {
    amount: number
    price: number
    percentage: string

    constructor({ amount, price }) {
        this.amount = amount
        this.price = price
        this.percentage = '6%'
    }

    _calculateDiscount():number {
        return this.price - (this.price * Number.parseInt(this.percentage)) / 100;
    }

    _createMessage({text, value, id, className}) {
        const message = document.createElement('p');
        message.className = 'giftbox__message';
        message.innerHTML = `${text} <strong id="${id? id : ''}">${value? value : ''}</strong>`;
        if (className) message.classList.add(className);

        return message;
    }

    updateInfo() {
        const productsAmount = document.querySelector('#productsAmount');
        const discountProductsAmount = document.querySelector('#discountProductsAmount');
        const freeDelivery = document.querySelector('#freeDelivery');
        const freeDeliveryHigh = document.querySelector('#freeDeliveryHigh');
        
        productsAmount.innerHTML = `${this.amount}`;
        discountProductsAmount.innerHTML = `${this._calculateDiscount()}`;

        if ((this.price >= 666) && (this.price < 1000)) {
            const freeDeliveryNumber = this.price - 666;
            
            freeDelivery.parentElement.classList.remove('_hidden');
            freeDelivery.innerHTML = `${freeDeliveryNumber}`;
        } else if ((this.price >= 1000 && this.price < 2000)) {
            freeDelivery.parentElement.classList.remove('_hidden');
            freeDelivery.innerHTML = '0';
        } else if (this.price >= 2000) {
            freeDelivery.parentElement.classList.add('_hidden');
            freeDeliveryHigh.parentElement.classList.remove('_hidden');
            
        }
    }

    render() {
        const calculatorBlock = document.createElement('div');
        calculatorBlock.className = 'giftbox__bottom';
        
        const freeDeliveryNumber = this.price - 666;

        const messages = [
            this._createMessage({
                text: 'Залишилось обрати:', 
                value: this.amount, 
                id: 'productsAmount',
                className: ''
            }),

            this._createMessage({
                text: 'Вартість набору з вигодою 6%:',
                value: this._calculateDiscount(),
                id: 'discountProductsAmount',
                className: '',
            }),

            this._createMessage({
                text: 'До безкоштовної доставки:', 
                value: freeDeliveryNumber, 
                id: 'freeDelivery', 
                className: '_hidden'
            }),

            this._createMessage({
                text:'Доставимо за наш рахунок', 
                value: '',
                id: 'freeDeliveryHigh',
                className: '_hidden'
            })
        ];
        
        messages.forEach((msg) => {
            calculatorBlock.append(msg);
        });

        return calculatorBlock;
    }
}
