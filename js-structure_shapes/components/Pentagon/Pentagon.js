import { getRandomColor } from "../../utils/randomColor.js";

export default function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    const newRandomColor = getRandomColor();

    pentagon.style.backgroundColor = newRandomColor;
  });
  return pentagon;
}
