var slides = document.querySelectorAll('.slides__item');
var indicators = document.querySelectorAll('.indicators__item');
var controls = document.querySelectorAll('.controls');

for(var i=0; i<controls.length; i++) {
controls[i].style.display = 'inline-block';
}


var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
  goToSlide(currentSlide+1);
}
function previousSlide(){
  goToSlide(currentSlide-1);
}
function goToSlide(n){
  slides[currentSlide].classList.toggle('active');
  indicators[currentSlide].classList.toggle('active');
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].classList.toggle('active');
  indicators[currentSlide].classList.toggle('active');
}

var playing = true;
var pauseButton = document.getElementById('pause');
var nextButton = document.getElementById('next');
var previousButton = document.getElementById('previous');

pauseButton.addEventListener('click', pauseButtonAction);
nextButton.addEventListener('click', nextSlideAction);
previousButton.addEventListener('click', previousSlideAction);

function pauseSlideshow(){
  pauseButton.innerHTML = '&#9658;';
  playing = false;
  clearInterval(slideInterval);
}
function playSlideshow(){
  pauseButton.innerHTML = '&#10074;&#10074;';
  playing = true;
  slideInterval = setInterval(nextSlide,2000);
}
function pauseButtonAction (){
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
}
function nextSlideAction () {
  pauseSlideshow();
  nextSlide();
}
function previousSlideAction () {
  pauseSlideshow();
  previousSlide();
}
function goToSlideOnClick () {
  var n = this.getAttribute('data-slide-to') - 1;
  pauseSlideshow();
  goToSlide(n);
}
var i;
for(i=0; i<indicators.length; i++) {
  indicators[i].addEventListener('click', goToSlideOnClick);
}