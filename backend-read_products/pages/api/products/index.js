import dbConnect from "@/db/dbConnect";
import Product from "@/db/models/Products";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }
}
