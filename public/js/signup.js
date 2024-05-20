const signupHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#usr-nm").value.trim();
  const first_name = document.querySelector("#fr-nm").value.trim();
  const last_name = document.querySelector("#ls-nm").value.trim();
  const password = document.querySelector("#pswd").value.trim();

  if (username && first_name && last_name && password) {
    const response = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({ username, first_name, last_name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Oops! Failed to sign up.");
    }
  }
};

const logBtnHandler = async (event) => {
  window.location.replace("/login");
};
document
  .querySelector("#signup-form")
  .addEventListener("submit", signupHandler);

document
  .querySelector("#back-to-login")
  .addEventListener("click", logBtnHandler);
