import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  return <Counter counter={counter} setCounter={setCounter} />;
}
