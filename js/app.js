/* Opening and closeing side nav */
// side nav vars
const openNav = document.getElementById("nav-open");
const closeNav = document.getElementById("nav-close");
const sideNav = document.querySelector(".nav-links-wrapper");

openNav.addEventListener("click", () => {
  sideNav.classList.add("active-nav");
  document.body.classList.add("overlay");
});
closeNav.addEventListener("click", () => {
  sideNav.classList.remove("active-nav");
  document.body.classList.remove("overlay");
});

// Removing body over lay on desktop viewport
window.addEventListener("resize", () => {
  if (
    document.body.offsetWidth > 999 &&
    document.body.classList.contains("overlay")
  ) {
    document.body.classList.remove("overlay");
  } else if (
    document.body.offsetWidth < 999 &&
    sideNav.classList.contains("active-nav")
  ) {
    document.body.classList.add("overlay");
  }
});

// Drop Down Menu
const dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach((element) => {
  element.addEventListener("click", (e) => {
    const arrowIcon = e.currentTarget.children[0].children[0];
    const container = e.currentTarget.children[1];
    const listHeight = container.children[0].clientHeight;
    if (container.getAttribute("style") === null) {
      container.style.height = `${listHeight}px`;
      arrowIcon.setAttribute("src", "images/icon-arrow-up.svg");
    } else {
      container.removeAttribute("Style");
      arrowIcon.setAttribute("src", "images/icon-arrow-down.svg");
    }
  });
});
