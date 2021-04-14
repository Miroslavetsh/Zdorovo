try {
    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper__button--next',
            prevEl: '.swiper__button--prev',
        },
        spaceBetween: 10,
    })
} catch (e) {}
