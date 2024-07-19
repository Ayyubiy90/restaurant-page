import createHome from "./home";
import createMenu from "./menu";
import createAbout from "./about";

function setupTabs() {
  const homeButton = document.getElementById("home");
  const menuButton = document.getElementById("menu");
  const aboutButton = document.getElementById("about");

  homeButton.addEventListener("click", () => {
    createHome();
  });

  menuButton.addEventListener("click", () => {
    createMenu();
  });

  aboutButton.addEventListener("click", () => {
    createAbout();
  });

  // Load the home page by default
  createHome();
}

setupTabs();
