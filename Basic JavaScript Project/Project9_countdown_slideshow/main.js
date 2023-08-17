// countdpwn timer function
function countdown() {
    var seconds = document.getElementById("seconds").value;
 // function to perfotm the countdown
    function tick() {
        seconds = seconds - 1;
        timer.innerHtml = seconds;

        if (seconds > 0) {
            setTimeout(tick, 1000);
        }
        else {
            alert("Time's up!");
        }
    }
    tick();
}

// image slideshow functions
var slideIndex = 1;
showSlides(slideIndex);

// next/prev control buttons
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// images control
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementById("MySlides");
    var dots = document.getElementById("dot");
    if (n > slides.lenght) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.lenght;
    }

    for ( i = 0; i < slides.lenght; i ++) {
        slides[i].style.display = "none";
    }

    for ( i = 0; i < dots.lenght; i ++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex -1].className += " active";
}