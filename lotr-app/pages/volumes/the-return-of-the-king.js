import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const trotk = volumes.find(({ slug }) => slug === "the-return-of-the-king");

export default function TheFellowshipOfTheRing() {
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{trotk.title}</h1>
      <p>{trotk.description}</p>
      <ul>
        {trotk.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={trotk.cover}
        alt="Cover Image"
        width={140}
        height={230}
      ></Image>
    </>
  );
}
