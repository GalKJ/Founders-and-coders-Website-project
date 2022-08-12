// Section one

// Select Elements
// Blob buttons  
const blobButtonOne = document.querySelector('#blob-button-one');
const blobOne = document.querySelector('#radius1');
// Introduction paragraphs
const paragraphsOneThree = document.querySelectorAll('.paragraphs-one-three');
const paragraphTwo = document.querySelector('#intro-paragraph-two');

// Timers to call introSlide functions 
setTimeout(introSlideRL, 750);
setTimeout(introSlideLR, 750);

// Function to add class to intro paragraph 
function introSlideRL() {
    paragraphsOneThree.forEach(para => {
        para.style.visibility = "visible";
        para.classList.add("slide-r-l");
    });
}

function introSlideLR() {
    paragraphTwo.style.visibility = "visible";
    paragraphTwo.classList.add("slide-l-r");
}

// Add event listener to blob button with logic to toggle visibility of element
blobButtonOne.addEventListener('click', () => {
    if (blobOne.style.visibility === "visible") {
        blobOne.style.visibility = "hidden";
      } else {
        blobOne.style.visibility = "visible";
      }
});

