const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");
const dotsContainter = document.querySelector(".dots");
const dots = document.querySelectorAll(".dot");

let activeSlide = 0;

const slides = document.querySelectorAll(".slide");

function handleSlideChange(position) {
  activeSlide = position;
  activeSlide = activeSlide % slides.length;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  slides.forEach((slide) => {
    if (slide.classList.contains("slide-active")) {
      slide.classList.remove("slide-active");
    }
  });
  changeActiveDot(activeSlide);
  slides[activeSlide].classList.add("slide-active");
}

function changeActiveDot(position) {
  dots.forEach((dot, index) => {
    if (index !== position) {
      dot.classList.remove("dot-active");
    } else {
      dot.classList.add("dot-active");
    }
  });
}

nextbtn.addEventListener("click", function () {
  handleSlideChange(activeSlide + 1);
});

prevbtn.addEventListener("click", function () {
  handleSlideChange(activeSlide - 1);
});

dotsContainter.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    // console.dir(e.target.dataset["id"]);
    const newPosition = Number(e.target.dataset["id"]) - 1;
    handleSlideChange(newPosition);
  }
});
