const form = document.getElementById("signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (username.value.length < 3) {
    alert("Username must be at least 3 characters long.");
    return;
  }

  if (!email.value.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.value.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  alert("Sign-up successful!");
});