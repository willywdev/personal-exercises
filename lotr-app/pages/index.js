import BookItem from "@/components/BookItem/BookItem.styled.jsx";
import BookList from "@/components/BookList/BookList.styled.jsx";
import Headline from "@/components/Headline/Headline.styled.jsx";
import Paragraph from "@/components/Paragraph/Paragraph.styled.jsx";
import SecondHeadline from "@/components/SecondHeadline/SecondHeadline.styled.jsx";
import { volumes } from "@/lib/data";
import Image from "next/image.js";
import Link from "next/link";
import Router from "next/router.js";
import { introduction } from "../lib/data.js";

export default function HomePage() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleClick() {
    const randomSlug = getRandomElement(volumes).slug;
    Router.push(`/volumes/${randomSlug}`);
  }

  return (
    <>
      <Headline>The Lord of the Rings</Headline>
      <Paragraph>{introduction}</Paragraph>
      <SecondHeadline>All Volumes</SecondHeadline>
      <BookList>
        {volumes.map((volume) => (
          <Link key={volume.title} href={`/volumes/${volume.slug}`}>
            <BookItem>
              <Image
                src={volume.cover}
                alt={volume.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "150px", height: "auto" }}
              />
              {volume.title}
            </BookItem>
          </Link>
        ))}
      </BookList>
      <button type="button" onClick={handleClick}>
        Im feeling lucky today
      </button>
    </>
  );
}
