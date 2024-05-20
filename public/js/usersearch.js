const searchForm = document.querySelector("#user-search-form");
const searchInput = document.querySelector("#usf-input");

const searchHandler = async (event) => {
  event.preventDefault();
  const query = await searchInput.value.trim();
  const response = await fetch(`/userinfo/${query}`);
  if (response.ok) {
    window.location.replace(`/userinfo/${query}`);
  } else {
    alert("No user found. Please try again");
  }
  
};

searchForm.addEventListener("submit", searchHandler);
