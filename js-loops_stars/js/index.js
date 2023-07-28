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
      img.src = "/assets/star-filled.svg";
    } else {
      img.src = "/assets/star-empty.svg";
    }
    starContainer.append(img);
    img.addEventListener("click", () => {
      img.src = "assets/star-filled.svg";
    });
  }
  //--^-- your code here --^--
}

renderStars();
