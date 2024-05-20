// adds functionality to navbar; will direct to new pages/routes
const homeBtnEl = document.querySelector("#home-btn");
const hsBtnEl = document.querySelector("#hs-btn");
const usrBtnEl = document.querySelector("#usr-srch");
const actBtnEl = document.querySelector("#act-btn");
const lgtBtnEl = document.querySelector("#lgt-btn");
const navCollapse = document.querySelector("#navbarNav");
const navToggler = document.querySelector("#nav-toggler");

homeBtnEl.addEventListener("click", () => window.location.replace("/"));
hsBtnEl.addEventListener("click", () => window.location.replace("/highscores"));
usrBtnEl.addEventListener("click", () =>
  window.location.replace("/usersearch")
);
actBtnEl.addEventListener("click", () => window.location.replace("/account"));

const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Oops! Failed to log out.");
  }
};

const showNavCol = async () => {
  console.dir(navCollapse);
  if (navCollapse.style.display === "none" || !navCollapse.style.display) {
    navCollapse.style.display = "flex";
    return;
  } else if (navCollapse.style.display === "flex") {
    navCollapse.style.display = "none";
    return;
  }
};

lgtBtnEl.addEventListener("click", logout);

navToggler.addEventListener("click", showNavCol);
// navCollapse.addEventListener("");
