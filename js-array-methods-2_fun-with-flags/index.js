import { Country } from "./components/Country/Country.js";
import { countries } from "./utils/countries.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;
  const foundCountries = countries.filter((country) => {
    return country.name.includes(searchString);
  });

  if (foundCountries) {
    foundCountries.forEach((country) => {
      const countryElement = Country(country);
      container.append(countryElement);
    });
  }
});
