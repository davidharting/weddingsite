/*
 * Image slideshow logic
 * Currently implemented by hiding with CSS display attribute.
 * Consider changing to having a single img and updating src attribute. 
 * This way, only loading one image when the page loads. Browser caching should
 * hopefully optimize cycling through to beginning.
 */

var slides = document.getElementsByClassName('slide');
var slideIndex = 0;
slides[slideIndex].style.display = "block";

function changeSlide() {
    slides[slideIndex].style.display = "none";
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block"; 
}

// Five seconds should be slow enough to be subtle but fast enough for someone 
// who wants to look at all the images
setInterval(changeSlide, 5000);