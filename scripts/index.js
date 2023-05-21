$("#more-info").click(function() {
    if ($("#about").hasClass("hidden")) {
        $("#about").removeClass("hidden");
        $("#about-container").removeClass("hidden");
      } else {
        $("#about").addClass("hidden");
        $("#about-container").addClass("hidden");
      }
})

$("#about-close").click(function() {
    $("#about").addClass("hidden");
    $("#about-container").addClass("hidden");
})


const SLIDES = $(".text-slide");
const IMG_SLIDES = $(".photo-slide");

function nextSlide() {
    let nextNum = SLIDES.index($(".text-slide:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
    if (nextNum > SLIDES.length) {
        nextNum = 1;
    }
    showSlide(nextNum);
}

function prevSlide() {
    let prevNum = SLIDES.index($(".text-slide:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
    if (prevNum <= 0) {
        prevNum = SLIDES.length;
    }
    showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  let currentImgSlide = IMG_SLIDES.eq(index);

  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");

  IMG_SLIDES.addClass("hidden");
  currentImgSlide.removeClass("hidden");
}

$("#previous-slide-button").click(function() {
    
  prevSlide();
});

/* change to next slide when user clicks next button */
$("#next-slide-button").click(function() {
  nextSlide();
  console.log("next")
});

