import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  loadHome();

  document.getElementById("home").addEventListener("click", () => {
    loadHome();
  });

  document.getElementById("menu").addEventListener("click", () => {
    loadMenu();
  });

  document.getElementById("contact").addEventListener("click", () => {
    loadContact();
  });
});
