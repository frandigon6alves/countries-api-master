let btnToggleDarkMode = document.querySelector("#btn-toggle-dark-mode");
const btn_selection_title = document.querySelector("#btn-selection-title");
const searchInput = document.querySelector("#input-field-country");
const countriesSection = document.querySelector("#countries-selection-box");



function toggleDarkMode() {
  document.querySelector("html").classList.toggle("dark-mode");
  btnToggleDarkMode.children[0].classList.toggle("bi-moon");
  btnToggleDarkMode.children[0].classList.toggle("bi-moon-fill");
}

function init() {
  btnToggleDarkMode.addEventListener("click", toggleDarkMode);
}

window.onload = init();

async function searchCountry(event) {
  if(event.key==`Backspace` && searchInput.value.length < 3){
    countriesSection.innerHTML= "";
  }
  if (searchInput.value.length < 3) {
   return;
  }
  const data = await fetch(
    "https://restcountries.com/v3.1/name/" + searchInput.value
  );
  const countries = await data.json();
  console.log(countries);
  countriesSection.innerHTML= "";
  
  countries.forEach(country => {
  countriesSection.innerHTML+=`
  <div class="card">
    <button
      class="country-flag"
      aria-label="open"
      style='background-image: url(${country.flags.png});'
    ></button>
    <div class="country-info-box">
      <h2 class="country-name">${country.name.common}</h2>
      <p>
        <span>Population: </span>
        <span>${country.population}</span>
      </p>
      <p>
        <span>Region:</span>
        <span>${country.region}</span>
      </p>
      <p>
        <span>Capital: </span>
        <span>${country.capital}</span>
      </p>
    </div>
  </div>`;
    
  });
}

searchInput.addEventListener("keyup", searchCountry);




