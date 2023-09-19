import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const findProduct = getProductById(id);
  if (!findProduct) {
    response.status(404).json({ "404 - Not found": id });
  }
  response.status(200).json(findProduct);
}
