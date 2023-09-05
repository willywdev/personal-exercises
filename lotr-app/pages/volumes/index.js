import { volumes } from "@/lib/data";
import Link from "next/link";
import Router from "next/router";

export default function Volumes() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleClick() {
    const randomSlug = getRandomElement(volumes).slug;
    Router.push(`/volumes/${randomSlug}`);
  }

  return (
    <>
      <Link href="/">{"<- Go back"}</Link>
      <h2>All volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <Link key={volume.title} href={`/volumes/${volume.slug}`}>
            <li>{volume.title}</li>
          </Link>
        ))}
      </ul>
      <button type="button" onClick={handleClick}>
        Im feeling lucky today
      </button>
    </>
  );
}
