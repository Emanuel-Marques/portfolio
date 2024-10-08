const burgerBtn = document.querySelector('#burger');
const menuMobile = document.querySelector('.menu-mobile');
burgerBtn.addEventListener('click', () => {
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        burgerBtn.innerHTML = 'menu';
    }else {
        menuMobile.classList.add('open');
        burgerBtn.innerHTML = 'close';
    }
});