// WRITTEN BY EZRA ADEYINKA
// ALL RIGHTS RESERVED
// PLEASE DO NOT EDIT THIS CODEIF YOU ARE NOT SURE OF WHAT YOU'RE DOING (NA GOD I TAKE BEG UNA)



if ($(window).width() >= 1024) {
    $(document).ready(function () {
    $('.features__body').attr({
        "data-aos": "zoom-in",
        "data-aos-duration": "800"
    });
    $('.about-us__content').attr({
        "data-aos": "fade-left",
        "data-aos-duration": "800"
    });
    $('.centered-text').attr({
        "data-aos": "zoom-in",
        "data-aos-duration": "800"
    }); 
    $('.distributors-card__item').attr({
        "data-aos": "flip-left",
        "data-aos-duration": "900"
    });
    $('.contact-us__content').attr({
        "data-aos": "flip-left",
        "data-aos-duration": "950"
    });
    $('.testimonies__cards').attr({
        "data-aos": "fade-right",
        "data-aos-duration": "900"
    });
    $('.footer-group__container').attr({
        "data-aos": "fade-down",
        "data-aos-duration": "1500"
    });
    setTimeout(() => {
        AOS.init();
    }, 10);
});
}



var sliderElement = document.getElementById("my-keen-slider")
var interval = 0
function autoplay(run) {
  clearInterval(interval)
  interval = setInterval(() => {
    if (run && slider) {
      slider.next()
    }
  }, 2000)
}


var slider = new KeenSlider("#my-keen-slider", {
    loop: true,
  duration: 1000,
  dragStart: () => {
    autoplay(false)
  },
  dragEnd: () => {
    autoplay(true)
  },
  created: function (instance) {
    document
      .getElementById("arrow-left")
      .addEventListener("click", function () {
        instance.prev()
      })

    document
      .getElementById("arrow-right")
      .addEventListener("click", function () {
        instance.next()
      })
    var dots_wrapper = document.getElementById("dots")
    var slides = document.querySelectorAll(".keen-slider__slide")
    slides.forEach(function (t, idx) {
      var dot = document.createElement("button")
      dot.classList.add("dot")
      dots_wrapper.appendChild(dot)
      dot.addEventListener("click", function () {
        instance.moveToSlide(idx)
      })
    })
    updateClasses(instance)
  },
  slideChanged(instance) {
    updateClasses(instance)
  },
})

sliderElement.addEventListener("mouseover", () => {
  autoplay(false)
})
sliderElement.addEventListener("mouseout", () => {
  autoplay(true)
})
autoplay(true)

function updateClasses(instance) {
  var slide = instance.details().relativeSlide
  var arrowLeft = document.getElementById("arrow-left")
  var arrowRight = document.getElementById("arrow-right")
  slide === 0
    ? arrowLeft.classList.add("arrow--disabled")
    : arrowLeft.classList.remove("arrow--disabled")
  slide === instance.details().size - 1
    ? arrowRight.classList.add("arrow--disabled")
    : arrowRight.classList.remove("arrow--disabled")

  var dots = document.querySelectorAll(".dot")
  dots.forEach(function (dot, idx) {
    idx === slide
      ? dot.classList.add("dot--active")
      : dot.classList.remove("dot--active")
  })
}


//CONTACT MODAL

// Get the modal
var modal = document.getElementById("myModal");
var menu = document.getElementById("fullscreen_menu");

// Get the button that opens the modal
var btn = document.getElementById("contact");
var btn_2 = document.getElementById("contact-2")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}
btn_2.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}


// MENU
$('.menu li').click(function (){
    $('.container .fullscreen_menu').toggleClass('active');
    $('.container ul.toggle').toggleClass('active');

});

$(document).ready(function(){
        $('.container ul.toggle').click(function(){
            $(this).toggleClass('active');
            $('.container .fullscreen_menu').toggleClass('active');
        })
    })

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY)
})


// SCROLL REVEAL

