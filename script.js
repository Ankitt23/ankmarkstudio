const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question = item.querySelector(".faq-question");

question.addEventListener("click", () => {

item.classList.toggle("active");

});

});

/* NAVBAR SCROLL */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
    navbar.classList.add("scrolled");
    }else{
    navbar.classList.remove("scrolled");
    }

    });


    /* MOBILE MENU */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    });

    const points = document.querySelectorAll(".point-container");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

points.forEach(point => {
  observer.observe(point);
});


