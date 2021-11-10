const menu = document.querySelector('.secondNav__list');
const open_nav = document.querySelector('.secondNav__openNav');
const close_nav = document.querySelector('.secondNav__closeNav');

const responsiveNav = () => {

    open_nav.addEventListener('click', () => {
        menu.classList.add('menuOpen');
        menu.classList.remove('menuClose');
    });
    close_nav.addEventListener('click', () => {
        menu.classList.add('menuClose');
        menu.classList.remove('menuOpen');
    });

}
responsiveNav();