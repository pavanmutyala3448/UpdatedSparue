var slides = document.querySelectorAll(".slide");
var info = document.querySelectorAll(".info");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });
  alert(manual);
  slides[manual].classList.add("active");
  if (manual % 2 == 0) {
    info[manual].classList.add("active");
  } else {
    info[manual].classList.add("bactive");
  }
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let bactive = document.getElementsByClassName("bactive");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });
      [...bactive].forEach((activeSlide) => {
        activeSlide.classList.remove("bactive");
      });

      btns[i].classList.add("active");

      if (i % 2 == 0) {
        info[i].classList.add("active");
        slides[i].classList.add("active");
      } else {
        info[i].classList.add("bactive");
        slides[i].classList.add("bactive");
      }
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 2000);
  };
  repeater();
};
repeat();
