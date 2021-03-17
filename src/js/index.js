'use strict';
// vendors
import 'babel-polyfill';
import Swiper from 'swiper';

// components

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    touchRatio: 1,
    grabCursor: true,
    loop: true,
    effect: 'slide',

    // effect: 'flip',
    // flipEffect: {
    //   slideShadow: true,
    //   limitRotation: true,
    // },
  });


  // // animation
  const animItems = document.querySelectorAll('._anim__items');

  if (animItems.length > 0) {
    const offset = function(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    };
    const animOnScroll = function() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_anim_stop')) {
            animItem.classList.remove('_active');
          }
        }
      }
    };
    window.addEventListener('scroll', animOnScroll);
    setTimeout(() => {
      animOnScroll();
    }, 300);
  }
  // scroll
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (const anchor of anchors) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
});
