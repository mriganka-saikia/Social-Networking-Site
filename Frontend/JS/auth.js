const BASE_URL = "https://your-backend-url.onrender.com/api"; // change after deployment

async function register() {
  const usernameVal = username.value;
  const emailVal = email.value;
  const passVal = password.value;
  const confirm = confirmPassword.value;

  if (passVal !== confirm) return alert("Passwords don't match");

  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: usernameVal, email: emailVal, password: passVal }),
    });

    if (!res.ok) throw new Error();
    alert("Registered successfully!");
    window.location = "login.html";
  } catch {
    alert("Backend not available — local mode only. Proceed to login.");
    window.location = "login.html";
  }
}

async function login() {
  const emailVal = email.value;
  const passVal = password.value;

  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailVal, password: passVal }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      window.location = "dashboard.html";
    } else throw new Error(data.message);
  } catch {
    alert("Backend offline — entering local mode.");
    window.location = "dashboard.html";
  }
}
