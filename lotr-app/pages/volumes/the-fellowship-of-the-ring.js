import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const tfotr = volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring");

export default function TheFellowshipOfTheRing() {
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{tfotr.title}</h1>
      <p>{tfotr.description}</p>
      <ul>
        {tfotr.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={tfotr.cover}
        alt="Cover Image"
        width={140}
        height={230}
      ></Image>
    </>
  );
}
