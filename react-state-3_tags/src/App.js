import { useState } from "react";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import "./styles.css";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newData) {
    setTags([...tags, newData]);
  }

  function handleDeleteTag(tag) {
    const newTagsArray = tags.filter((_tag) => _tag !== tag);
    setTags(newTagsArray);
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
