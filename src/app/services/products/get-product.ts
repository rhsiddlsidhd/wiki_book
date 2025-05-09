import { ApiContext, Product } from "@/app/types/data";
import { fetcher } from "@/app/utils";

export type GetProductParams = {
  id: number;
};

const getProduct = async (
  context: ApiContext,
  { id }: GetProductParams
): Promise<Product> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/product/${id}`,
    {
      headers: {
        Origin: "*",
        Accept: "application/json",
        "Content-Type": "application.json",
      },
    }
  );
};

export default getProduct;
