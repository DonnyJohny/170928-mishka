var navMain = document.querySelector('.main-nav');
var navUser = document.querySelector('.user-nav');
var navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-nav--nojs');
navUser.classList.remove('user-nav--nojs');
navToggle.classList.remove('main-header__toggle--nojs');

if(navToggle){
  navToggle.addEventListener('click', function() {
    navMain.classList.toggle("main-nav--closed");
    navUser.classList.toggle("user-nav--closed");
    navToggle.classList.toggle("main-header__toggle--opened");
  })
};
