// -----------------------------------Banner-------------------------------

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}



// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  setTimeout(showSlides,4000);
}


// ----------------------------------------Gallery-------------------------------


function openModal() {
  document.getElementById("GModal").style.display = "block";
}

function closeModal() {
  document.getElementById("GModal").style.display = "none";
}

var GslideIndex = 1;
GshowSlides(GslideIndex);

function GplusSlides(m) {
  GshowSlides(GslideIndex += m);
}

function GcurrentSlide(m) {
  GshowSlides(GslideIndex = m);
}

function GshowSlides(m) {
  var x;
  var slidesG = document.getElementsByClassName("Gallery-Slides");
  if (m > slidesG.length) {GslideIndex = 1}
  if (m < 1) {GslideIndex = slidesG.length}
  for (x = 0; x < slidesG.length; x++) {
      slidesG[x].style.display = "none";
  }
  slidesG[GslideIndex-1].style.display = "block";
}




// ----------------------------------------------Top Button------------------------------------------


//Get the button
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}