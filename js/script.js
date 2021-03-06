// Modules

const MENU_TO_BURGER_WIDTH = 840
const BODY = document.querySelector('body')

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
    static underHeaderHeight = this.underHeader.offsetHeight
    static fadeUpUnderHeaderButton = this.header.querySelector('.fadeUpUnderHeaderButton')
    static headerBurger = this.header.querySelector('.headerBurger')
    static headerNav = this.header.querySelector('.headerNav')

    static fadeUnderHeader() {
        Header.fadeUpUnderHeaderButton.addEventListener('click', () => {
            Header.underHeader.parentNode.classList.toggle('_faded')
            Header.underHeader.parentNode.style.cssText = `transform: translateY(-${Header.underHeader.offsetHeight}px);`
        })
    }
    static generateBurgerOnWidth() {
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
    }

    static chandgeHeaderOffset() {
        window.addEventListener('resize', () => {
            if (Header.header.classList.contains('_faded'))
                Header.underHeader.parentNode.style.cssText = `transform: translateY(-${Header.underHeader.offsetHeight}px);`
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
        this.fadeUnderHeader()
        this.chandgeHeaderOffset()
        this.changeLanguagesOnClick()
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
