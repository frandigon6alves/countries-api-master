let btnToggleDarkMode = document.querySelector("#btn-toggle-dark-mode");
const btn_selection_title = document.querySelector("#btn-selection-title");
const searchInput = document.querySelector("#input-field-country");
const countriesSection = document.querySelector("#countries-selection-box");

const card= `
<div class="card">
  <button
    class="country-flag"
    aria-label="open Albania details"
    style='background-image: url("https://flagcdn.com/al.svg");'
  ></button>
  <div class="country-info-box">
    <h2 class="country-name">Albania</h2>
    <p>
      <span>Population: </span>
      <span>2,837,743</span>
    </p>
    <p>
      <span>Region: </span>
      <span>Europe</span>
    </p>
    <p>
      <span>Capital: </span>
      <span>Tirana</span>
    </p>
  </div>
</div>`;

function toggleDarkMode() {
  document.querySelector("html").classList.toggle("dark-mode");
  btnToggleDarkMode.children[0].classList.toggle("bi-moon");
  btnToggleDarkMode.children[0].classList.toggle("bi-moon-fill");
}

function init() {
  btnToggleDarkMode.addEventListener("click", toggleDarkMode);
}

window.onload = init();

async function searchCountry() {
  if (searchInput.value.length < 0) {
    return;
  }
  const data = await fetch(
    "https://restcountries.com/v3.1/name/" + searchInput.value
  );
  const countries = await data.json();
  console.log(countries);

  countries.forEach(country => {
  countriesSection.appendChild(card);
    
  });
}

searchInput.addEventListener("keyup", searchCountry);


