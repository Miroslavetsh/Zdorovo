// Modules

const MENU_TO_BURGER_WIDTH = 840
const BODY = document.querySelector('body')
const PAGE = document.querySelector('.page')

window.addEventListener('load', () => {
    Header.handler()
})

window.addEventListener('resize', () => {
    Header.handler()
})

class Header {
    static header = document.querySelector('.header')
    static languages = this.header.querySelectorAll('.availableLanguage')
    static underHeader = this.header.querySelector('.underheader')
    static underHeaderHeight = this.underHeader ? this.underHeader.offsetHeight : 0
    static fadeUpUnderHeaderButton = this.header.querySelector('.fadeUpUnderHeaderButton')
    static headerBurger = this.header.querySelector('.headerBurger')
    static headerNav = this.header.querySelector('.headerNav')

    static fadeUnderHeader() {
        try {
            Header.fadeUpUnderHeaderButton.addEventListener('click', () => {
                Header.underHeader.parentNode.classList.toggle('_faded')
                Header.underHeader.parentNode.style.cssText = `transform: translateY(-${Header.underHeader.offsetHeight}px);`
            })
        } catch (e) {}
    }
    static generateBurgerOnWidth() {
        try {
            const headerInner = Header.header.querySelector('.header__inner')
            this.headerBurger = this.header.querySelector('.headerBurger')

            if (window.innerWidth <= MENU_TO_BURGER_WIDTH && Header.headerBurger === null) {
                headerInner.insertAdjacentHTML(
                    'beforeEnd',
                    `
                <div class="header__burger headerBurger">
                    <span></span>
                </div>
            `,
                )
                this.changeBurgerWithNavigationOnClick()
            } else if (window.innerWidth > MENU_TO_BURGER_WIDTH && Header.headerBurger !== null) {
                headerInner.removeChild(this.headerBurger)
                Header.headerNav.classList.remove('_active')
                BODY.classList.remove('_fixed')
            }
        } catch (e) {}
    }

    static chandgeHeaderOffset() {
        try {
            window.addEventListener('resize', () => {
                if (Header.header.classList.contains('_faded'))
                    Header.underHeader.parentNode.style.cssText = `transform: translateY(-${Header.underHeader.offsetHeight}px);`
            })
        } catch (e) {}
    }

    static chandgeHeaderState() {
        PAGE.addEventListener('scroll', () => {
            let preview = document.querySelector('.preview')

            if (PAGE.scrollTop > preview.clientHeight) {
                Header.header.classList.add('_fixed')
            } else {
                Header.header.classList.remove('_fixed')
            }
        })
    }

    static changeBurgerWithNavigationOnClick() {
        Header.headerBurger = Header.header.querySelector('.headerBurger')
        if (Header.headerBurger) {
            Header.headerBurger.addEventListener('click', () => {
                Header.headerBurger.classList.toggle('_active')
                Header.headerNav.classList.toggle('_active')
                BODY.classList.toggle('_fixed')
            })
        }
    }

    static changeLanguagesOnClick() {
        this.languages.forEach((lang) => {
            lang.parentNode.addEventListener('click', () => {
                const currentLanguageImage = Header.header.querySelector('.currentLanguage')

                currentLanguageImage.parentNode.innerHTML = `<img class="currentLanguage" src=${lang.getAttribute(
                    'src',
                )} alt="">`
            })
        })
    }

    static handler() {
        if (this.underHeader !== null) {
            this.fadeUnderHeader()
            this.chandgeHeaderOffset()
        }
        this.changeLanguagesOnClick()
        this.chandgeHeaderState()
        this.generateBurgerOnWidth()
    }
}

// // WEBP format 

function testWebP(callback) {

	var webP = new Image()
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2)
	}
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};

try {
    const cards = document.querySelectorAll('.card')
    cards.forEach(function (card) {
        let btnPlus = card.querySelector('.cardBtnPlus')
        let btnMinus = card.querySelector('.cardBtnMinus')

        btnMinus.addEventListener('click', function () {
            let span = this.parentNode.querySelector('span')
            if (+span.innerText !== 0) {
                span.innerText = +span.innerText - 1
            }
        })

        btnPlus.addEventListener('click', function () {
            this.parentNode.querySelector('span').innerText =
                +this.parentNode.querySelector('span').innerText + 1
        })
    })
    function cardsItemMinus() {}
    function cardsItemPlus() {}
} catch (e) {}
