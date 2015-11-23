var myNavigation = ( function() {

  'use strict';

  var docBody;
  var navButton;
  var menuState;

  var init = function() {

    if ( _cutMustard() ) {

      docBody = document.querySelector('body');
      navButton = document.querySelector('.js-navbutton');
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

    navButton.addEventListener('click', function(el){

      el.preventDefault();
      _swapClasses();

    }, false);

  };

  var _swapClasses = function(){

    if (menuState === 'hidden')
    {
      docBody.classList.remove('js-nav-hidden');
      docBody.classList.add('js-nav-visible');
      menuState = 'visible';
    } else {
      docBody.classList.remove('js-nav-visible');
      docBody.classList.add('js-nav-hidden');
      menuState = 'hidden';
    }

  };

  return {
    init:init
  };


})();

myNavigation.init();
