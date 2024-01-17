export default function initMenuBehavior() {
  const button = document.querySelector(".menu_hamburger");
  const menu = document.querySelector(".side_menu");

  function changeMenuVisibilityByClickingOutsideMenu({ target }) {
    if (!menu.contains(target) && !button.contains(target)) {
      window.removeEventListener(
        "click",
        changeMenuVisibilityByClickingOutsideMenu
      );
      menu.classList.remove("active");
    }
  }

  button.addEventListener("click", () => {
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      window.addEventListener(
        "click",
        changeMenuVisibilityByClickingOutsideMenu
      );
    } else {
      menu.classList.remove("active");
    }
  });
}
