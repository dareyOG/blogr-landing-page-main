'use strict';

function blogrLandingMain() {
  const navs = document.querySelectorAll('.nav');
  const openModal = document.getElementById('open-modal');
  const closeModal = document.getElementById('close-modal');
  const modalWindow = document.getElementById('modal');
  const menu = document.querySelectorAll('.menu');
  const menuLinks = document.querySelectorAll('.menu_link');
  const link_dropList = document.querySelectorAll('.link_droplist');

  const mobileModalElements = [openModal, closeModal, modalWindow];

  // Hide function
  function modalFunc(e) {
    e.preventDefault();
    mobileModalElements.forEach((element) => element.classList.toggle('hidden'));
  }

  // Open modal window
  openModal.addEventListener('click', modalFunc);

  // Close modal window
  closeModal.addEventListener('click', modalFunc);

  // Mobile functionality

  menuLinks.forEach((link) =>
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const clickedMenu = e.target.closest('.menu_link');

      // Rotate active menu icon
      clickedMenu?.children[1].classList.toggle('rotate-180');

      // Show links for clicked menu
      const menulist = clickedMenu.nextElementSibling;
      menulist.classList.toggle('hidden');

      // Hide links for inactive menu
      menuLinks.forEach((otherLink) => {
        if (otherLink !== link) {
          const inactiveLink = otherLink?.nextElementSibling;

          // Return inactive menu icon to initial state
          const inactiveIcon = otherLink.children[1];
          inactiveIcon?.classList.remove('rotate-180');

          // Return inactive menu to initial state
          if (inactiveLink.classList.contains('hidden')) return;
          else {
            inactiveLink.classList.add('hidden');
          }
        }
      });
    })
  );

  // Desktop functionality

  navs.forEach((nav) => {
    nav.addEventListener('click', function (e) {
      e.preventDefault();
      const clickedNav = e.target.closest('.nav');

      // Rotate active nav icon
      clickedNav?.children[0].children[0].classList.toggle('rotate-180');

      // Show active nav list
      clickedNav?.children[1].classList.toggle('hidden');

      // Hide nav list for inactive nav
      navs.forEach((otherNav) => {
        if (otherNav !== nav) {
          const inactiveNav = otherNav.children;

          // Return inactive nav icon to initial state
          const inactiveIcon = inactiveNav[0].children[0];
          inactiveIcon.classList.remove('rotate-180');

          // Return inactive nav to initial state
          if (inactiveNav[1].classList.contains('hidden')) return;
          else {
            inactiveNav[1].classList.add('hidden');
          }
        }
      });
    });
  });
}

blogrLandingMain();
