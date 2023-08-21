import Avatar from "./components/Avatar";
import Header from "./components/Header";
import Link from "./components/Link";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header>
        <Link href="#">
          <Logo />
        </Link>
        <Nav>
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <Link className="navigation__link" href="#about">
            About
          </Link>
          <Link className="navigation__link" href="#impressum">
            Impressum
          </Link>
        </Nav>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Avatar />
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
