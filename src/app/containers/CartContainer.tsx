'use client'
import CartProduct from "../components/organisms/CartProduct";
import { useGlobalSpinnerActionsContext } from "../context/GlobalSpinnerContext";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import purchase from "../services/purchase/purchase";
import { ApiContext } from "../types/data";

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};

/**
 * 카트 컨테이너
 */
const CartContainer = () => {
  const setGlobalSpinner = useGlobalSpinnerActionsContext();
  const { cart, removeProductFromCart } = useShoppingCartContext();
  // 삭제 버튼 클릭 시, 상품을 삭제
  const handleRemoveButtonClick = (id: number) => {
    removeProductFromCart(id);
  };
  // 구입 버튼 클릭 시, 상품을 구입
  const handleBuyButtonClick = async (id: number) => {
    try {
      setGlobalSpinner(true);
      await purchase(context, { productId: id });
      window.alert("구입했습니다");
      // 상품 구입 후에는 카트에서 상품을 삭제한다
      removeProductFromCart(id);
    } catch (err: unknown) {
      if (err instanceof Error) {
        window.alert(err.message);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return (
    <>
      {cart.map((p) => (
        <CartProduct
          key={p.id}
          id={p.id}
          imageUrl={p.imageUrl}
          title={p.title}
          price={Number(p.price)}
          onRemoveButtonClick={handleRemoveButtonClick}
          onBuyButtonClick={handleBuyButtonClick}
        />
      ))}
    </>
  );
};

export default CartContainer;
