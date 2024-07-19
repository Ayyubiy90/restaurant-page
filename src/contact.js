export default function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h1>Contact Us</h1>
    <form id="contact-form">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      
      <button type="submit">Send</button>
    </form>
    <p id="form-response"></p>
  `;

  // Add form validation
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    const message = form.querySelector("#message").value;
    const response = document.getElementById("form-response");

    if (name && email && message) {
      response.textContent = "Thank you for your message!";
      form.reset(); // Reset the form fields
    } else {
      response.textContent = "Please fill out all fields.";
    }
  });
}
