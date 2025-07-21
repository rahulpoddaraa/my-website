// script.js

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
  setInterval(nextSlide, 2000); // Change slide every 2 seconds
});
