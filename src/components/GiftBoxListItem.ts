export default class GiftBoxListItem {
    parent: HTMLElement;
    productName: string;
    isEmpty:boolean;
    
    constructor(parentSelector:string, productName:string) {
        this.parent = document.querySelector(parentSelector);
        this.productName = productName;
        this.isEmpty = true;
    }
    
    render() {
        const item = document.createElement('li');
        item.className = 'giftbox__item';
        item.innerHTML = this.productName;
        this.parent.appendChild(item);
    }
}
