import { ApiContext, Product } from "@/app/types/data";
import { fetcher } from "@/app/utils";

export type AddProductsParams = {
  product: Omit<Product, "id">;
};

const addProduct = async (
  context: ApiContext,
  { product }: AddProductsParams
): Promise<Product> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, "")}/products`, {
    method: "POST",
    headers: {
      Origin: "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      credentials: "include",
    },
    body: JSON.stringify(product),
  });
};

export default addProduct;
