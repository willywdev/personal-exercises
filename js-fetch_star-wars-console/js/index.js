console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      console.error("I feel the dark side");
    } else {
      const starwarsPeople = await response.json();
      console.log(starwarsPeople.results);
      const r2d2 = starwarsPeople.results.find((being) => {
        return being.name === "R2-D2";
      });
      console.log("R2-D2's 👀 are " + r2d2.eye_color);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchData();
