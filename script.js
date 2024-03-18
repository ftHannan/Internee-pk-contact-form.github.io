const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous error messages
  const errorMessages = document.querySelectorAll(".error");
  errorMessages.forEach((message) => (message.textContent = ""));

  // Get form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Validate name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email address";
    isValid = false;
  }

  // Validate message
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    isValid = false;
  }

  // If form is valid, show success message
  if (isValid) {
    form.reset();
    successMessage.style.display = "block";
  }
});
