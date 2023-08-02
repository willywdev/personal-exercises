import { getRandomColor } from "../../utils/randomColor.js";

export default function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    const newRandomColor = getRandomColor();

    square.style.backgroundColor = newRandomColor;
  });
  return square;
}
