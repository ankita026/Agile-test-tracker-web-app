// login validation
function validateLogin(username, password) {
  if (!username || !password) {
    return { success: false, message: "Username and password are required." };
  }
  if (password.length < 6) {
    return { success: false, message: "Password must be at least 6 characters." };
  }
  return { success: true, message: "Login successful." };
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const result = validateLogin(
        document.getElementById("username").value,
        document.getElementById("password").value
      );
      document.getElementById("login-message").textContent = result.message;
    });
  }
});
