/**
 * 상품디테일 페이지는
 */

import { ApiContext, Category } from "@/app/types/data";
import envSchema from "@/app/utils/env";

const categoryNameDict: Record<Category, string> = {
  book: "책",
  shoes: "신발",
  clothes: "의류",
};

const context: ApiContext = {
  apiRootUrl: envSchema.parse(process.env).API_BASE_URL,
};

export const revalidate = 10;

export const generateStaticParams = async () => {};

const productPage = () => {};
