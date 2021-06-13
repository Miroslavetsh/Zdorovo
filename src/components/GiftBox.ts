export default class GiftBox {
    parent: HTMLElement;
    cells: Array<HTMLElement>;
    spaces:number;
    boxSize:string;

    constructor({ parentSelector, spaces, boxSize }) {
        this.parent = document.querySelector(parentSelector);
        this.cells = [];
        this.spaces = spaces;
        this.boxSize = boxSize;
    }
    // TODO
    addPruduct() {}
    removePruduct() {}
    
    createCells() {        
        for (let i = 0; i < this.spaces; i++) {
            const cell = document.createElement('div');
            cell.className = 'giftbox__cell';

            this.cells.push(cell);
        }       
    }

    createBoxPart(boxPartName:string) {
        // ParentElementForImage
        const boxPart  = document.createElement('div');
        boxPart.className = `giftbox__${boxPartName}`;

        // ImageElement
        const boxImage = document.createElement('img');
        boxImage.src = `img/${this.boxSize}-box/${this.boxSize}-box-${boxPartName}.png`;
        boxPart.appendChild(boxImage);

        return boxPart;
    }

    render() {
        this.createCells();

        // Create Box element
        const box = document.createElement('div');
        box.className = 'giftbox__wrapper';
        
        // Create cover for box 
        const boxCover = this.createBoxPart('top');
        box.appendChild(boxCover);
        
        // Create inner for box
        const boxInner = this.createBoxPart('bottom');

        // Inserting cells into box
        this.cells.forEach(cell => {
            boxInner.appendChild(cell);
        });

        // End Box creating 
        box.appendChild(boxInner);
        
        this.parent.insertAdjacentElement('beforeend', box);
    }
}

// class GiftBoxCell {
//     constructor() {}

//     render() {
//         return `
//             <div class="giftbox__cell">
//                 <img src="img/product/product.png" alt="product.png">
//             </div>
//         `
//     }
// }
