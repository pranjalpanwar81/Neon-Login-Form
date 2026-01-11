const form = document.getElementById("loginForm");
const password = document.getElementById("password");
const toggleEye = document.getElementById("toggleEye");
const button = document.getElementById("loginBtn");

toggleEye.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const pass = password.value.trim();

  if (!username || !pass) {
    alert("Fill all fields");
    return;
  }

  button.innerText = "Logging in...";
  button.disabled = true;

  setTimeout(() => {
    alert("Login successful ✨");
    button.innerText = "Login";
    button.disabled = false;
    form.reset();
  }, 2000);
});
