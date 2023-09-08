import Lights from "../components/Lights";
import Link from "../components/Link";

export default function Rooms({ handleToggle, isLightOn }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Lights</h1>
      <Lights handleToggle={handleToggle} isLightOn={isLightOn} />
    </>
  );
}
