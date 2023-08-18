import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => {
    alert("You clicked me!");
  };

  return <Button color="red" text="Hello World!" onClick={handleClick} />;
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button style={{ color: color }} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
