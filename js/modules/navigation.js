var myNavigation = ( function() {

  'use strict';

  var docBody;
  var navLink;
  var navIcon;
  var menuState;

  var init = function() {

    if ( _cutMustard() ) {

      docBody = document.querySelector('body');
      navLink = document.querySelector('.js-navlink');
      navIcon = document.querySelector('.js-navicon');
      docBody.classList.add('js-nav-hidden');
      menuState = 'hidden';

      _attachEvents();

    }

  };

  var _cutMustard = function() {
    return (
      'addEventListener' in window &&
      'querySelector' in document &&
      'classList' in document.createElement('span')
    );
  };

  var _attachEvents = function() {

    navLink.addEventListener('click', function(el){

      el.preventDefault();
      _swapClasses();

    }, false);

  };

  var _swapClasses = function(){

    if (menuState === 'hidden')
    {

      docBody.classList.remove('js-nav-hidden');
      docBody.classList.add('js-nav-visible');

      navIcon.classList.remove('js-is-open');
      navIcon.classList.add('js-is-closed');

      menuState = 'visible';

    } else {

      docBody.classList.remove('js-nav-visible');
      docBody.classList.add('js-nav-hidden');

      navIcon.classList.remove('js-is-closed');
      navIcon.classList.add('js-is-open');

      menuState = 'hidden';

    }

  };

  return {
    init:init
  };


})();

myNavigation.init();
