"use client";
import Link from "next/link";
import { Fragment } from "react";
import { ApiContext, Product } from "../types/data";
import ProductCardList from "../components/organisms/ProductCardList";
import useSearch from "../services/products/use-search";
import ProductCard from "../components/organisms/ProductCard";

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};

interface UserProductCardListContainerProps {
  /**
   * 상품을 소유한 사용자 ID
   */
  userId: number;
  /**
   * 초기에 표시할 상품 리스트
   */
  products?: Product[];
}

/**
 * 사용자 상품 카드 리스트 컨테이너
 */
const UserProductCardListContainer = ({
  userId,
  products,
}: UserProductCardListContainerProps) => {
  const { products: userProducts } = useSearch(context, {
    userId,
    initial: products,
  });

  return (
    <ProductCardList numberPerRow={6} numberPerRowForMobile={2}>
      {userProducts.map((p) => (
        <Fragment key={p.id}>
          <Link href={`/products/${p.id}`} passHref>
            {/* 상품 카드 */}
            <ProductCard
              variant="small"
              title={p.title}
              price={p.price}
              imageUrl={p.imageUrl}
            />
          </Link>
        </Fragment>
      ))}
    </ProductCardList>
  );
};

export default UserProductCardListContainer;
