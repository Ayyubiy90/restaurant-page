import mockMenuData from "./mock-data";

export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h1>Menu</h1>
    <ul id="menu-list"></ul>
  `;

  const menuList = document.getElementById("menu-list");

  // Simulate fetching data
  setTimeout(() => {
    mockMenuData.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.price}`;
      menuList.appendChild(li);
    });
  }, 500); // Simulating a network delay
}
