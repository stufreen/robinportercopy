const opener = document.getElementById("menu-opener");
const closer = document.getElementById("menu-closer");
const drawer = document.getElementById("menu-drawer");
const animatedItems = document.querySelectorAll("[data-menu-animated]");

console.log(animatedItems);

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
    // animatedItems[i].style.opacity = 0;
    // animatedItems[i],
    //   300,
    //   { transform: { translateX: "-0.5rem", rotateX: "10deg" }, opacity: 0 },
    //   { transform: { translateX: "0rem", rotateX: "0deg" }, opacity: 1 },
    //   animol.Easing.easeOutCubic,
    //   30 * i
    // );
  }
});

closer.addEventListener("click", () => {
  drawer.classList.remove("open");
  document.body.classList.remove("mobile-drawer-open");
});
