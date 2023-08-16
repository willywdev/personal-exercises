import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article>
      <h2 className="article__title">Hello World!</h2>
      <label htmlFor="link">Link:</label>
      <input type="text" id="link" />
      <a
        href="https://stackoverflow.com/questions/39320393/jsx-or-html-autocompletion-in-visual-studio-code"
        className="article__link"
      >
        jsx-or-html-autocompletion-in-visual-studio-code
      </a>
    </article>
  );
}
