const asideContent = document.querySelector(".aside-content");
const closeAside = document.querySelector(".close-menu");
const openAside = document.querySelector(".menu-bar");

openAside.addEventListener("click", () => {
  asideContent.classList.toggle("hidden");
  openAside.classList.toggle("hidden");
  closeAside.classList.toggle("hidden");
});

closeAside.addEventListener("click", () => {
  asideContent.classList.toggle("hidden");
  openAside.classList.toggle("hidden");
  closeAside.classList.toggle("hidden");
});
