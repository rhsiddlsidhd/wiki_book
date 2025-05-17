"use client";
import { useRouter } from "next/navigation";
import ProductForm, {
  ProductFormData,
} from "../components/organisms/ProductForm";
import { useAuthContext } from "../context/AuthContext";
import { useGlobalSpinnerActionsContext } from "../context/GlobalSpinnerContext";
import addProduct from "../services/products/add-product";
import { ApiContext, Product } from "../types/data";
import { useAuthGuard } from "../utils/hook";

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};

/**
 * 상품 게시폼 컨테이너
 */
const ProductFormContainer = () => {
  useAuthGuard();
  const router = useRouter();
  const { authUser } = useAuthContext();
  const setGlobalSpinner = useGlobalSpinnerActionsContext();
  // 게시 버튼을 눌렀을 때
  const handleSave = async (data: ProductFormData) => {
    if (!authUser) return;

    const product = {
      image: data.image,
      title: data.title,
      description: data.description,
      category: data.category,
      condition: data.condition,
      price: data.price,
      imageUrl: "/products/shoes/feet-1840619_1920.jpeg", // 더미 이미지
      blurDataUrl: "",
      owner: authUser,
    };

    try {
      setGlobalSpinner(true);
      // 제품 API로 상품을 추가한다
      await addProduct(context, { product });
      console.log(authUser.id);
      router.push(`/users/${authUser.id}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        window.alert(err.message);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return <ProductForm onProductSave={handleSave} />;
};

export default ProductFormContainer;
