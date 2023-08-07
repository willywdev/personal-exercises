import { getRandomHexCode, setColorToGuess } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--
  try {
    const response = await fetch(colorApiUrl);
    if (!response.ok) {
      console.log("We got a color that doesnt exist yet :(");
    } else {
      const newColor = await response.json();
      const newColorName = newColor.name.value;
      const newColorHex = newColor.hex.value;
      setColorToGuess(newColorHex, newColorName);
    }
  } catch (error) {
    console.error(error);
  }
  // --^-- your code here --^--
}
