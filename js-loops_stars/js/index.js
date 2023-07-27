console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');
let counter = 0;

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    if (counter < filledStars) {
      counter++;
      console.log(counter < filledStars);
      console.log(filledStars);
      img.src = "/js-loops_stars/assets/star-filled.svg";
    } else {
      img.src = "/js-loops_stars/assets/star-empty.svg";
    }
    starContainer.append(img);
  }
  //--^-- your code here --^--
}

renderStars(2);
