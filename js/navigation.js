var navMain = document.querySelector('.main-nav');
var navUser = document.querySelector('.user-nav');
var navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-nav--nojs');
navUser.classList.remove('user-nav--nojs');
navToggle.classList.remove('main-header__toggle--nojs');

if(navToggle){
  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed') && navUser.classList.contains('user-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navUser.classList.remove('user-nav--closed');
      navMain.classList.add('main-nav--opened');
      navUser.classList.add('user-nav--opened');
      navToggle.classList.add('main-header__toggle--opened');
    }
    else {
      navMain.classList.add('main-nav--closed');
      navUser.classList.add('user-nav--closed');
      navToggle.classList.add('main-header__toggle--closed');
      navMain.classList.remove('main-nav--opened');
      navUser.classList.remove('user-nav--opened');
      navToggle.classList.remove('main-header__toggle--opened');
    }
  })
};
