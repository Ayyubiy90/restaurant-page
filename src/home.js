export default function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h1>Welcome to Our Restaurant</h1>
    <p>We serve delicious food made from fresh ingredients!</p>
    <img src="./assets/food1.jpg" alt="Restaurant" style="width: 100%; height: auto;" />
  `;
}
