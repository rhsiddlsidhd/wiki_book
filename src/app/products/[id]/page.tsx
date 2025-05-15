/**
 * 상품 상세 페이지 ISR 구조
 * Incremental Static Regeneration
 * https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration
 * - 전체 사이트를 재 구축하지 않고 정적 콘텐츠를 업데이트한다.
 * - 사전 렌더링된 정적페이지를 제공하여 서버 부하를 줄인다.
 * - 적절한 캐시 제어 헤더가 페이지에 자동으로 추가된다.
 * - 다음 빌드 시간 없이 대량의 콘텐츠 페이지를 처리한다
 *
 * SSG는 한 번 구축된 페이지를 정적으로 생성하고 캐싱하여 매우 빠르게 제공하는 방식이다.
 * 한번 생성된 페이지는 다음 빌드 전까지는 변경되지 않기 때문에, 데이터가 변해도 사용자에게는 반영되지 않는다.
 *
 * ISR은 SSG의 장점을 유지하면서, 일정 주기(revalidate)마다 백그라운드에서 페이지를 재생성하는 방식이다.
 * 즉, 초기에는 정적으로 생성된 페이지를 제공하지만, 설정된 시간 이후에는 새로운 요청 시 백그라운드에서 페이지를 재 생성하고 ,그 결과를 캐싱하여 다음 요청부터 반영한다.
 *
 * =====================================================================================
 *
 * 서버 컴포넌트는 클라이언트 컴포넌트를 import 하여 사용 할 수 있다.
 * 클라이언트 컴포넌트는 서버 컴포넌트를 import 하여 사용 할 수 없다.
 */

import BreadcrumbItem from "@/app/components/atoms/BreadcrumbItem";
import Separator from "@/app/components/atoms/Separator";
import Text from "@/app/components/atoms/Text";
import Box from "@/app/components/layout/Box";
import Flex from "@/app/components/layout/Flex";
import Breadcrumb from "@/app/components/molecule/Breadcrumb";
import ProductCard from "@/app/components/organisms/ProductCard";
import UserProfile from "@/app/components/organisms/UserProfile";
import Layout from "@/app/components/templates/Layout";
import AddToCartButtonContainer from "@/app/containers/AddToCartButtonContainer";
import getAllProducts from "@/app/services/products/get-all-products";
import getProduct from "@/app/services/products/get-product";
import { ApiContext, Category } from "@/app/types/data";
import envSchema from "@/app/utils/env";
import Link from "next/link";

const categoryNameDict: Record<Category, string> = {
  book: "책",
  shoes: "신발",
  clothes: "의류",
};
// http://localhost:8000/products/1
const context: ApiContext = {
  apiRootUrl: envSchema.parse(process.env).API_BASE_URL,
};

export const revalidate = 10;

export const generateStaticParams = async () => {
  const products = await getAllProducts(context);
  return products.map(({ id }) => ({ id: id.toString() }));
};

const productPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product = await getProduct(context, { id: Number(id) });

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">톱</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/search">검색</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href={`/search/${product.category}`}>
                {categoryNameDict[product.category as Category]}
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>{product.title}</BreadcrumbItem>
          </Breadcrumb>
          <Flex paddingTop={2} paddingBottom={1} justifyContent="center">
            <ProductCard
              variant="detail"
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </Flex>
          <Separator />
          <Box paddingTop={1}>
            <Text as="h2" variant="large" marginTop={0}>
              게시자
            </Text>
            <Link href={`/users/${product.owner.id}`}>
              {/* 사용자 프로필 */}
              <UserProfile
                variant="small"
                username={product.owner.username}
                profileImageUrl={product.owner.profileImageUrl}
                numberOfProducts={100}
              />
            </Link>
          </Box>
        </Box>
        <Box padding={2} width={{ base: "100%", md: "700px" }}>
          <Flex
            justifyContent="space-between"
            flexDirection="column"
            height={{ base: "", md: "100%" }}
          >
            {/* 상품 개요를 표시, 줄바꿈별로 텍스트 컴포넌트로 감싼다 */}
            <Box>
              {product.description
                .split("\n")
                .map((text: string, i: number) => (
                  <Text key={i} as="p">
                    {text}
                  </Text>
                ))}
            </Box>
            {/*
                카트 추가 버튼 컨테이너
                버튼을 눌렀다면 ShoppingCartContext에 상품을 추가한다 */}
            <AddToCartButtonContainer product={product} />
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default productPage;
