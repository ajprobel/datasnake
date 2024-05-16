const searchForm = document.querySelector("#user-search-form");
const searchInput = document.querySelector("#usf-input");

const searchHandler = async (event) => {
  event.preventDefault();
  const query = await searchInput.value.trim();
  window.location.replace(`/userinfo/${query}`);
};

searchForm.addEventListener("submit", searchHandler);
