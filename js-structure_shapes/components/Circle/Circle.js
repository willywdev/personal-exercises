import { getRandomColor } from "/utils/randomColor.js";

export default function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    const newRandomColor = getRandomColor();

    circle.style.backgroundColor = newRandomColor;
  });
  return circle;
}
