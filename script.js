const searchBar = document.querySelectorAll(".search-bar");
console.log(searchBar);

const typeSearch = document.querySelectorAll(".type-search");
console.log(typeSearch);

searchBar.addEventListener("click", (e)=>{
    typeSearch.style.borderColor = `rgb(0, 0, 0)`;
});

