const sideMenu = document.getElementById("sideMenu");
const closeSideMenu = document.getElementById("closeSideMenu");
const openSideMenu = document.getElementById("openSideMenu");

// Side menu toggles -------------------------
openSideMenu.addEventListener("click", () => {
  sideMenu.classList.remove("translate-x-full");
});
closeSideMenu.addEventListener("click", () => {
  sideMenu.classList.add("translate-x-full");
});
