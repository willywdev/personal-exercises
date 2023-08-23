import Button from "./Button";
import "./Card.css";
import Tag from "./Tag";
function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        <Tag
          tag={user.roles.map((role) => {
            return <Tag key={role} tag={role} />;
          })}
        />
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
