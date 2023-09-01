import Link from "next/link.js";
import { introduction } from "../lib/data.js";

export default function HomePage() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <Link href="/volumes">See all volumes</Link>
    </>
  );
}
