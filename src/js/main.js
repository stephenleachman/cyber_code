
// Slide Nav Script
const slideNav = document.getElementById('slideMenu');
const slideNavToggle = document.getElementById('slideNavToggle');
const body = document.getElementsByTagName('body');
const navBar = document.getElementById('mainNavBar');
const contentWrap = document.getElementById('contentWrap');


contentWrap.addEventListener('click', () => {

  slideNav.classList.add('d-none');
  slideNavToggle.classList.remove('open');  

  if(document.documentElement.scrollTop < 20){
    navBar.classList.remove('bg-dark');
  };
});


slideNavToggle.addEventListener("click", () => {

  slideNavToggle.classList.toggle('open');
  slideNav.classList.toggle('d-none');

  if(document.documentElement.scrollTop < 20){
    navBar.classList.toggle('bg-dark');
  };
});


// Main NavBar Script
window.onscroll = () => {

  if(document.documentElement.scrollTop > 20) {
    navBar.classList.add('sticky-top', 'bg-dark');

  } else if (slideNavToggle.classList.contains('open')) {
   
  } else {
    navBar.classList.remove('sticky-top', 'bg-dark');
  };
};



