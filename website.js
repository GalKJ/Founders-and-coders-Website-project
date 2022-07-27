// Section one

// Select Elements
const blobButtonOne = document.querySelector('#blob-button-one');
const blobOne = document.querySelector('#radius1');

// Add event listener to blob button with logic to toggle visibility of element
blobButtonOne.addEventListener('click', () => {
    if (blobOne.style.visibility === "visible") {
        blobOne.style.visibility = "hidden";
      } else {
        blobOne.style.visibility = "visible";
      }
});

// Carousel

// Select elements
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Select Buttons
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button and carousel slide listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) {
        return;
    }
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';  
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        return;
    }
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'last-clone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'first-clone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
// End of carousel