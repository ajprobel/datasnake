// adds functionality to navbar; will direct to new pages/routes
const homeBtnEl = document.querySelector("#home-btn");
const hsBtnEl = document.querySelector("#hs-btn");
const usrBtnEl = document.querySelector("#usr-srch");
const actBtnEl = document.querySelector("#act-btn");
const lgtBtnEl = document.querySelector("#lgt-btn");

homeBtnEl.addEventListener("click", () => window.location.replace("/"));
hsBtnEl.addEventListener("click", () => window.location.replace("/highscores"));
usrBtnEl.addEventListener("click", () =>
  window.location.replace("/usersearch")
);
actBtnEl.addEventListener("click", () => window.location.replace("/account"));
lgtBtnEl.addEventListener("click", () => window.location.replace("/logout"));
