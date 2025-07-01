const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu__list--active');
})

const menuListCours = document.querySelector('.main-menu__list');

menuBtn.addEventListener('click', () => {
  menuListCours.classList.toggle('main-menu__list--active');
})