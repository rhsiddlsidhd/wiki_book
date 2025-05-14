import { ApiContext, Category, Condition, Product } from "@/app/types/data";
import useSWR from "swr";

export type UseSearchProps = {
  category?: Category;

  conditions?: Condition[];

  userId?: number;

  sort?: keyof Omit<Product, "owner">;

  order?: "asc" | "desc";

  initial?: Product[];
};

export type UseSearch = {
  products: Product[];

  isLoading: boolean;

  isError: boolean;
};

const useSearch = (
  context: ApiContext,
  {
    category,
    userId,
    conditions,
    initial,
    sort = "id",
    order = "desc",
  }: UseSearchProps = {}
): UseSearch => {
  const path = `${context.apiRootUrl.replace(/\/$/g, "")}/products`;
  const params = new URLSearchParams();
  if (category) params.append("category", category);

  if (userId) params.append("owner.id", `${userId}`);
  if (conditions)
    conditions.forEach((condition) => params.append("condition", condition));
  if (sort) params.append("_sort", sort);
  if (order) params.append("_order", order);
  const query = params.toString();
  const { data, error } = useSWR<Product[]>(
    query.length > 0 ? `${path}?${query}` : path
  );

  return {
    products: data ?? initial ?? [],
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useSearch;
