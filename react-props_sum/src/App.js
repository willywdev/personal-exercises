import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={4} valueB={6} />;
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
}
