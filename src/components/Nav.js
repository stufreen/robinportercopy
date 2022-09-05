const nav = document.getElementById("nav");
const opener = document.getElementById("menu-opener");
const closer = document.getElementById("menu-closer");
const drawer = document.getElementById("menu-drawer");
const animatedItems = document.querySelectorAll("[data-menu-animated]");
const links = document.querySelectorAll("#menu-drawer a");
let scrolled = false;

opener.addEventListener("click", () => {
  drawer.classList.add("open");
  document.body.classList.add("mobile-drawer-open");

  for (let i = 0; i < animatedItems.length; i++) {
    animatedItems[i].style.opacity = 0;
    animatedItems[i].animate(
      [
        { transform: "translateY(-0.3rem) rotateX(10deg)", opacity: 0 },
        { transform: "translateY(0rem) rotateX(0deg)", opacity: 1 },
      ],
      {
        duration: 300,
        delay: 30 * i,
        easing: "cubic-bezier(0.33, 1, 0.68, 1)",
        fill: "both",
      }
    );
  }
});

function closeDrawer() {
  drawer.classList.remove("open");
  document.body.classList.remove("mobile-drawer-open");
}

closer.addEventListener("click", closeDrawer);

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener("click", closeDrawer);
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 0 && !scrolled) {
    scrolled = true;
    nav.classList.add("scrolled");
  } else if (window.scrollY <= 0 && scrolled) {
    scrolled = false;
    nav.classList.remove("scrolled");
  }
});
