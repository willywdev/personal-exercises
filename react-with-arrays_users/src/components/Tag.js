import "./Tag.css";

export default function Tag({ tag }) {
  if (tag === "admin") {
    return <li className="tag tag--highlight">{tag}</li>;
  } else {
    return <li className="tag">{tag}</li>;
  }
}
