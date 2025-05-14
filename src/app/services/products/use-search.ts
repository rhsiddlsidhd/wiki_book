import { ApiContext, Category, Condition, Product } from "@/app/types/data";
import { fetcher } from "@/app/utils";
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
    query.length > 0 ? `${path}?${query}` : path,
    fetcher
  );
  console.log("path", `${path}?${query}`);
  console.log(data); // 데이터가 잘 오는지 확인
  console.log(error); // 에러가 있는지 확인

  return {
    products: data ?? initial ?? [],
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useSearch;
