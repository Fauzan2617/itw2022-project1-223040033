// Bagian Navbar
const burger = document.querySelector(".burger");
const sidebar = document.querySelector(".sidebar");
const bgSidebar = document.querySelector(".bg-sidebar");

burger.addEventListener("click", function () {
  this.classList.toggle("change");
  sidebar.classList.toggle("change");
  bgSidebar.classList.toggle("change");
});

bgSidebar.addEventListener("click", function () {
  this.classList.remove("change");
  sidebar.classList.remove("change");
  burger.classList.remove("change");
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
