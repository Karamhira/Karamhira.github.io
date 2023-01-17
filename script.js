document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
  });
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.ham-nav');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('menu-visible');
});

window.addEventListener('scroll', function() {
  var contain = document.querySelector('.ham_container');
  var hamburger = document.querySelector('.hamburger');
  var menu = document.querySelector('.menu');
  var aboutMe = document.querySelector('.About_me');
  var aboutMePosition = aboutMe.getBoundingClientRect().top;
  var home = document.querySelector('.home');
  var homePosition = home.getBoundingClientRect().bottom;
  var mq = window.matchMedia('(max-width: 1050px)');

  if ((window.scrollY > aboutMePosition)) {
    contain.style.display = 'block';
    hamburger.style.display = 'block';
    menu.style.display = 'none';
  }
  else if ((window.scrollY < homePosition && mq.matches)) {
    contain.style.display = 'block';
    hamburger.style.display = 'block';
    menu.style.display = 'none';
  }
  else if (window.scrollY < homePosition) {
    hamburger.style.display = 'none';
    contain.style.display = 'none';
    menu.style.display = 'flex';
  }


});

window.addEventListener('resize', function() {
  var mq = window.matchMedia('(max-width: 1050px)');
  if (mq.matches) {
    document.querySelector('.hamburger').style.display = 'block';
    document.querySelector('.ham_container').style.display = 'block';
    document.querySelector('.menu').style.display = 'none';
  } else {
    document.querySelector('.hamburger').style.display = 'none';
    document.querySelector('.ham_container').style.display = 'none';
    document.querySelector('.menu').style.display = 'flex';

  }
});


document.querySelector('.icon.gh').addEventListener('click', function() {
  window.open('https://github.com/Karamhira', '_blank');
});

document.querySelector('.icon.ln').addEventListener('click', function() {
  window.open('https://www.linkedin.com/in/karamvir-hira-4b4358202/', '_blank');
});

const hamburgerButton = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.ham-nav');

// Hide the hamburger menu when a link is clicked
hamburgerMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    hamburgerMenu.classList.remove('menu-visible');
    hamburgerButton.classList.remove('is-active');

  }
});

const ham = document.querySelector('.hamburger');
const hamNav = document.querySelector('.ham-nav');

window.addEventListener('scroll', function() {
   const display = window.getComputedStyle(ham).display;
  if (display === 'none') {
    hamburgerMenu.classList.remove('menu-visible');
    hamburgerButton.classList.remove('is-active');
  } 

});



