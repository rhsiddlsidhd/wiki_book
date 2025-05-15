"use client";

import { useRouter } from "next/navigation";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { Product } from "../types/data";
import Button from "./../components/atoms/Button/index";

interface AddToCartButtonContainerProps {
  /**
   * 추가될 상품
   */
  product: Product;
}

/**
 * 카트 추가 버튼 컨테이너
 */
const AddToCartButtonContainer = ({
  product,
}: AddToCartButtonContainerProps) => {
  const { cart, addProductToCart } = useShoppingCartContext();
  const handleAddToCartButtonClick = () => {
    const productId = Number(product.id);
    const result = cart.findIndex((v) => v.id === productId);

    // 같은 상품이 카트에 없으면 카트에 추가한다
    if (result === -1) {
      addProductToCart(product);
    }
  };

  return (
    <Button
      width={{ base: "100%", md: "400px" }}
      height="66px"
      onClick={handleAddToCartButtonClick}
    >
      카트에 추가
    </Button>
  );
};

export default AddToCartButtonContainer;
