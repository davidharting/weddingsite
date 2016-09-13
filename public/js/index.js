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