import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();
// Create dom element for a card and append it to the root
fetchDataAndRender();

// --v-- your code below this line --v--

async function fetchDataAndRender() {
  try {
    const result = await fetch("https://swapi.dev/api/people");
    let starwarsPeople = await result.json();
    starwarsPeople = starwarsPeople.results;
    console.log(starwarsPeople);
    starwarsPeople.forEach((person) => {
      const newCard = Card(person);
      renderElement(newCard);
    });
  } catch (error) {
    console.error(error);
  }
}
