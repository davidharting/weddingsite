// This variable determines which pictures are in the slideshow and the order
var images = ["1", "kiss", "smiles", "ring", "happy", "after", "hug"];
// Start index at 1 since HTML should start with the 0th item
var slideIndex = 1; 

function changeSlide() {
    var slide = document.getElementById("slide");
    slide.src = "images/" + images[slideIndex] + ".jpg";
    slideIndex = (slideIndex + 1) % images.length;
}

// Five seconds should be slow enough to be subtle but fast enough for someone 
// who wants to look at all the images
setInterval(changeSlide, 5000);