import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const ttt = volumes.find(({ slug }) => slug === "the-two-towers");

export default function TheFellowshipOfTheRing() {
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{ttt.title}</h1>
      <p>{ttt.description}</p>
      <ul>
        {ttt.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image src={ttt.cover} alt="Cover Image" width={140} height={230}></Image>
    </>
  );
}
