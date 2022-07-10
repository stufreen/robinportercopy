const nav = document.getElementById("nav");
const toggle = document.getElementById("nav-toggle");
const drawer = document.getElementById("nav-drawer");

toggle.addEventListener("click", () => {
  if (drawer.classList.contains("open")) {
    drawer.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  } else {
    drawer.classList.add("open");
    toggle.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
  }
});
