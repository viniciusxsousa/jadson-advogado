const btnMenu = document.querySelector('.header__btnMenu');
const menuMobile = document.querySelector('.header__menu-mobile')

btnMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('menu-active');
})