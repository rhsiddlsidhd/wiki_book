import { ApiContext, Product } from "@/app/types/data";
import useSWR from "swr";

export type UseProductProps = {
  id: number;
  initial?: Product;
};

export type UseProduct = {
  product?: Product;
  isLoading: boolean;
  isError: boolean;
};

const useProduct = (context: ApiContext, { id, initial }: UseProductProps) => {
  const { data, error } = useSWR<Product>(
    `${context.apiRootUrl.replace(/\/$/g, "")}/products/${id}`
  );

  return {
    product: data ?? initial,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useProduct;
