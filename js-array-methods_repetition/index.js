const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/

const onlyTitles = recipes.map((recipe) => {
  return recipe.title;
}); // ['Crepes', ...]

const titlesWithDuration = recipes.map((recipe) => {
  let time = "minutes";
  if (recipe.duration > 60) {
    recipe.duration = recipe.duration / 60;
    time = "hours";
  }
  return recipe.title + " - " + recipe.duration + " " + time;
}); // ['Crepes (60min)', ...]

const timePerServing = recipes.map((recipe) => {
  // Was ist time per Serving????? 😤
  return recipe.duration * recipe.servings;
}); // [20, 10, 432, 12]

// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');

const allTitlesInOneString = recipes
  .map((recipe) => {
    return recipe.title;
  })
  .join(", "); // 'Crepes, Scrambled Eggs, ...'

// For more information how to join an array,
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways

/*
 2: `filter` exercises
*/

const recipesThatOnlyTake60minutesOrLess = recipes.filter((recipe) => {
  return recipe.duration < 61;
});

const allRecipesWithMoreThan2Servings = recipes.filter((recipe) => {
  return recipe.servings > 2;
});

const allRecipesWithTitlesLongerThan12Characters = recipes.filter((recipe) => {
  return recipe.title.length > 12;
});

export {
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
  allTitlesInOneString,
  onlyTitles,
  recipesThatOnlyTake60minutesOrLess,
  timePerServing,
  titlesWithDuration,
};
