import React, { useState } from "react";
import Form from "./components/Form.js";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form setName={setName} setEmail={setEmail} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name ? name : "John Doe"}</span>
      </p>
      <p>
        Email: <span className="output">{email ? email : "john@doe.com"}</span>
      </p>
    </div>
  );
}
