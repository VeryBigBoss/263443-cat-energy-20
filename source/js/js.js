var buttonMenu = document.querySelector(".main-nav__toggle");
var mainNavList = document.querySelector(".main-nav__list");

buttonMenu.classList.toggle("main-nav__toggle--close");
mainNavList.classList.toggle("main-nav__list--closed");

buttonMenu.addEventListener("click", function (event) {
  event.preventDefault();
  buttonMenu.classList.toggle("main-nav__toggle--close");
  mainNavList.classList.toggle("main-nav__list--closed");
});
