/**
* Template Name: TheEvent - Optimizado para carga rápida
* Author: BootstrapMade.com + ajustes
*/
(function() {
  "use strict";

  /*** Toggle .scrolled en el body al hacer scroll ***/
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
    if (!selectHeader.classList.contains('scroll-up-sticky') &&
        !selectHeader.classList.contains('sticky-top') &&
        !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }
  document.addEventListener('scroll', toggleScrolled);
  document.addEventListener('DOMContentLoaded', toggleScrolled);

  /*** Mobile nav toggle ***/
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', function() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    });
  }

  /*** Hide mobile nav on same-page/hash links ***/
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active') && mobileNavToggleBtn) {
        mobileNavToggleBtn.click();
      }
    });
  });

  /*** Toggle mobile nav dropdowns ***/
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /*** Scroll top button ***/
  let scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  document.addEventListener('scroll', toggleScrollTop);
  document.addEventListener('DOMContentLoaded', toggleScrollTop);




  /*** AOS - Animations on scroll ***/
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
      AOS.refresh();
    }
  });

  /*** FAQ toggle ***/
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach(faqItem => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /*** Corregir scroll si hay hash en URL ***/
  document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash && document.querySelector(window.location.hash)) {
      setTimeout(() => {
        let section = document.querySelector(window.location.hash);
        let scrollMarginTop = parseInt(getComputedStyle(section).scrollMarginTop) || 0;
        window.scrollTo({ top: section.offsetTop - scrollMarginTop, behavior: 'smooth' });
      }, 50);
    }
  });

  /*** Navmenu Scrollspy ***/
  const navmenulinks = document.querySelectorAll('.navmenu a');
  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }
  document.addEventListener('scroll', navmenuScrollspy);
  document.addEventListener('DOMContentLoaded', navmenuScrollspy);

  /*** Preloader ***/
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /*** GLightbox y Swiper sliders - cargar en window.load ***/
  window.addEventListener('load', function() {
    // GLightbox
    if (typeof GLightbox !== 'undefined') {
      const glightbox = GLightbox({ selector: '.glightbox' });
    }

    // Swiper sliders
    if (typeof Swiper !== 'undefined') {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let configEl = swiperElement.querySelector(".swiper-config");
        if (!configEl) return;
        let config = JSON.parse(configEl.innerHTML.trim());
        new Swiper(swiperElement, config);
      });
    }
  });

})();