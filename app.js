let navButton = document.querySelector("#responsive-logo");
let nav = document.querySelector(".dashboard-container");
let body = document.querySelector("body");
let logo = document.querySelector(".logo-container");
let main = document.querySelector(".main-container");
let header = document.querySelector(".header-container");

function toggleNav() {
  if (!nav.classList.value.includes("responsive")) {
    nav.classList.toggle("responsive");
  }
}

function removeNav() {
  if (nav.classList.value.includes("responsive")) {
    nav.classList.remove("responsive");
  }
}

navButton.addEventListener("click", toggleNav);
logo.addEventListener("click", removeNav);
main.addEventListener("click", removeNav);
// header.addEventListener("click", removeNav);
