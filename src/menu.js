export default function createMenu() {
  const content = document.getElementById("content");
  content.innerHTML = `
        <h1>Our Menu</h1>
        <ul>
            <li>Pizza - $12</li>
            <li>Pasta - $10</li>
            <li>Burger - $8</li>
        </ul>
    `;
}
