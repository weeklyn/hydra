var nav = document.querySelector(".nav"),
    toggle = document.querySelector(".burger-toggle");

function toggleNav() {
  nav.classList.toggle("active");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleNav, false);



function closeBurger() {
    if (nav.classList.contains("active")) {
      toggleNav();
      toggleToggle();
    }
  }
  
  document.addEventListener('click', closeBurger, false);