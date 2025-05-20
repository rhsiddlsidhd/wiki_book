"use client";
import Link from "next/link";
import { ApiContext, Category, Condition } from "../types/data";
import useSearch from "../services/products/use-search";
import ProductCardList from "../components/organisms/ProductCardList";

import RectLoader from "../components/atoms/RectLoader";
import ProductCard from "../components/organisms/ProductCard";
import Box from "../components/layout/Box";

const context: ApiContext = {
  apiRootUrl: process.env.API_BASE_URL || "/api/proxy",
};

interface ProductCardListContainerProps {
  /**
   * 검색 쿼리 - 카테고리
   */
  category?: Category;
  /**
   * 검색 쿼리 - 상품 상태
   */
  conditions?: Condition[];
}

/**
 * 상품 카드 리스트 컨테이너
 */
const ProductCardListContainer = ({
  category,
  conditions,
}: ProductCardListContainerProps) => {
  const { products, isLoading } = useSearch(context, {
    category,
    conditions,
  });

  return (
    <ProductCardList>
      {/* 로드 중에는 RectLoader를 표시 */}
      {isLoading &&
        Array.from(Array(16), (_, k) => (
          <Box key={k}>
            <Box $display={{ base: "none", md: "block" }}>
              <RectLoader width={240} height={240} />
            </Box>
            <Box $display={{ base: "block", md: "none" }}>
              <RectLoader width={160} height={160} />
            </Box>
          </Box>
        ))}
      {!isLoading &&
        products.map((p) => (
          <Box key={p.id}>
            <Link href={`/products/${p.id}`} passHref>
              {/* 상품 카드 */}
              <ProductCard
                variant="listing"
                title={p.title}
                price={p.price}
                imageUrl={p.imageUrl}
                blurDataUrl={p.blurDataUrl}
              />
            </Link>
          </Box>
        ))}
    </ProductCardList>
  );
};

export default ProductCardListContainer;
