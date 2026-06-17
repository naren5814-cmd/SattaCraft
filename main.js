/* ====================================
SATTACRAFT MAIN JS
==================================== */

/* Check JS Connection */
console.log("SattaCraft JS Connected");

/* ====================================
SCROLL REVEAL ANIMATION
==================================== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
        element.classList.add("active");
    }

});

}

window.addEventListener("scroll", revealOnScroll);

/* Run Once On Page Load */
revealOnScroll();

/* ====================================
   NAVBAR SCROLL EFFECT
==================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

/* ====================================
   MOBILE NAVBAR
==================================== */

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    hamburger.classList.toggle("active");

});

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        hamburger.classList.remove("active");

    });

});
