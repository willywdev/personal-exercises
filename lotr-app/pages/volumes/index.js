import { volumes } from "@/lib/data";
import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <Link href="/">{"<- Go back"}</Link>
      <h2>All volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <Link key={volume.title} href={"/volumes/" + volume.slug}>
            <li>{volume.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
