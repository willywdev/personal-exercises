import logo from "../img/logo.jpg";
import Image from "./Image";

export default function Logo() {
  return <Image className="round-image" src={logo} alt="logo" />;
}
