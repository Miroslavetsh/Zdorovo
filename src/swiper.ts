import { Navigation, Swiper, SwiperOptions } from 'swiper';
import '@styles/swiper';

Swiper.use([Navigation]);

const swiperParams: SwiperOptions = {
    speed: 600,
    slidesPerView: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}

const swiper = new Swiper('.swiper-container', swiperParams);

export default swiper;
