"use client";

import { useSearchParams } from "next/navigation";

interface UseSearchParamsHook {
  key: "slug" | "condition";
}

const useSearchParamsHook = ({ key }: UseSearchParamsHook) => {
  const searchParams = useSearchParams();

  const search = searchParams.getAll(key);

  return search;
};

export default useSearchParamsHook;
