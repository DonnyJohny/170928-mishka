
  var navMain = document.querySelector('.main-nav');
  var navUser = document.querySelector('.user-nav');
  var navToggle = document.querySelector('.main-header__toggle');

  navMain.classList.remove('main-nav--nojs');
  navUser.classList.remove('user-nav--nojs');
  navToggle.classList.remove('main-header__toggle--nojs');

  navToggle.addEventListener('click', function() {
    if(navToggle.classList.contains('main-header__toggle--closed')) {
      if (navMain.classList.contains('main-nav--closed')) {
        if(navUser.classList.contains('user-nav--closed')) {
          navMain.classList.remove('main-nav--closed');
          navUser.classList.remove('user-nav--closed');
          navToggle.classList.remove('main-header__toggle--closed');
          navMain.classList.add('main-nav--opened');
          navUser.classList.add('user-nav--opened');
          navToggle.classList.add('main-header__toggle--opened');
        }
      }
    } else {
    navMain.classList.add('main-nav--closed');
    navUser.classList.add('user-nav--closed');
    navToggle.classList.add('main-header__toggle--closed');
    navMain.classList.remove('main-nav--opened');
    navUser.classList.remove('user-nav--opened');
    navToggle.classList.remove('main-header__toggle--opened');
    }
  });
