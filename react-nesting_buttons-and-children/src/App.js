import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Star Wars</Button>
      <Button>Game of Thrones</Button>
      <Button>Rick & Morty</Button>
      <Button>Breaking Bad</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
