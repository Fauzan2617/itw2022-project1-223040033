// Bagian Navbar
let menuBar = document.querySelector(".menu-bar");
let menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

let navBar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  let windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scroll-active", windowPosition);
});

// Bagian Judul
const txtElement = ["Freelancer", "Web Developer", "Graphic Designer"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(ngetik, 400);
})();
