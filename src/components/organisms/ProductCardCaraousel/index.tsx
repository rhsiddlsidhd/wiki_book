import Flex from "../../layout/Flex";

interface ProductCardCarouselProps {
  children?: React.ReactNode;
}

/**
 * 상품 카드 캐러셀
 */
const ProductCardCarousel = ({ children }: ProductCardCarouselProps) => {
  return <Flex $overflow={{ base: "scroll", md: "hidden" }}>{children}</Flex>;
};

export default ProductCardCarousel;
