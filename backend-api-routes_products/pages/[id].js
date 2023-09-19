import { getProductById } from "@/services/productServices";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Details() {
  const query = useRouter().query.id;
  const findProduct = getProductById(query);

  if (!findProduct) {
    return <h1>404 - The product you are searching for was not found!</h1>;
  }

  return (
    <main>
      <h1>{findProduct.name}</h1>
      <p>{findProduct.description}</p>
      <p>
        {findProduct.price}
        {findProduct.currency}
      </p>
      <p>Lives in / Or belongs to {findProduct.category}</p>
      <Link href="/">Get back to all Products</Link>
    </main>
  );
}
