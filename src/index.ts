import '@styles/style';
import './swiper';
import GiftBox from './components/GiftBox';
import GiftBoxListItem from './components/GiftBoxListItem';
import MainInfo from './components/MainInfo';

const mainInfo = new MainInfo({
    productsAmount: 8,
    totalPrice: 0,
    boxSize: 'large',
});

// const modal = new Modal()
// modal.init()

mainInfo.renderCalculatedProperties();

const giftBox = new GiftBox({
    parentSelector: '#giftboxContainer',
    spaces: mainInfo.state.productsAmount,
    boxSize: mainInfo.state.boxSize,
});

giftBox.render();

const productsBlock = document.getElementById('productsBlock');

[...productsBlock.children].forEach((element) => {
    const img = element.querySelector('img').getAttribute('src');
    const name = element.querySelector('[data-name]').innerHTML.trim();
    const price = Number.parseInt(element.querySelector('[data-price]').innerHTML);

    type ProductInfo = {
        img: string,
        name: string,
        price: number,
    }

    const productInfo: ProductInfo = {
        img,
        name,
        price,
    }

    const giftBoxListSelector = '#giftboxList';
    const giftBoxListItem = new GiftBoxListItem(giftBoxListSelector, productInfo.name);

    element.addEventListener('click', () => {
        if (mainInfo.state.productsAmount > 0) {
            giftBoxListItem.render();
            mainInfo.addTotalPrice(productInfo.price);
            mainInfo.updateCalculatedProperties();
        }
    })
})
