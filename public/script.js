const hamburger = document.querySelector("#hamburger");
const slideMenu = document.querySelector("#slideMenu");
hamburger.addEventListener("click", () => {
  if (slideMenu.classList.contains("translate-x-[-100%]")) {
    slideMenu.classList.remove("translate-x-[-100%]");
    slideMenu.classList.add("translate-x-[0%]");
  } else {
    slideMenu.classList.remove("translate-x-[0%]");
    slideMenu.classList.add("translate-x-[-100%]");
  }
});
