import avatar from "../img/avatar.jpg";
import Image from "./Image";

export default function Avatar() {
  return <Image className="round-image" src={avatar} alt="avatar" />;
}
