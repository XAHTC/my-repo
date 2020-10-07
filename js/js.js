let menuBody = document.querySelector(".menu__body");
let iconMenu = document.querySelector(".menu__icon");
iconMenu.addEventListener('click', () => {
  menuBody.classList.toggle("active");
});
;