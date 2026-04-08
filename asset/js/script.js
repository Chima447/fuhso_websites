
//////////////NAVBAR BURGER//////////////////
let burger = document.querySelector('.navbar-burger.burger'),
  navMenu = document.querySelector('#navMenu');
burger.onclick = () => {
  burger.classList.toggle('is-active');
  navMenu.classList.toggle('is-active');
}

const setDisplay = (x) => x.classList.toggle('is-active')

///////////////////////GO TO TOP BUTTTON////////////////////////
var goUp = document.getElementById('goUp'),
  rightOffset = goUp.clientWidth + 10;
goUp.style.right = -rightOffset + 'px'
window.onscroll = () => {
  if (document.documentElement.scrollTop >= window.innerHeight) {
    goUp.style.right = '1rem'
  } else {
    goUp.style.right = -rightOffset + 'px'
  }
}
//////////////////////END GO TO TO BOTTON///////////////


///////////////// Close the Modal/////////////////////
const closeModal = (id) => document.getElementById(id).classList.remove('is-active');

// LIGHT BOX SCRIPT

{

  function openModal() { document.querySelector(".modal").classList.add('is-active'); }

  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) { showSlides(slideIndex += n); }

  // Thumbnail image controls
  function currentSlide(n) { showSlides(slideIndex = n); }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }
}
/////////////////////////// END LIGHT BOX//////////////////////////////////////


// ///////////////////////  TABS////////////////////
function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("content-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}






