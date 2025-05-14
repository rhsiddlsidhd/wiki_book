/**
 * 탭과 관련된 데이터를 Filter 하여 SSR로 미리 만들어두고, 빠른 응답과 SEO 향상을 이룬다
 * http://localhost:3000/search?condition=used&condition=new
 * http://localhost:3000/search/book?condition=used&condition=new
 *
 * catagory
 * book , cloths, shoes 에 대한 SSR 구성
 *
 */

// import BreadcrumbItem from "@/app/components/atoms/BreadcrumbItem";
// import Text from "@/app/components/atoms/Text";
import BreadcrumbItem from "@/app/components/atoms/BreadcrumbItem";
import Box from "@/app/components/layout/Box";
import Breadcrumb from "@/app/components/molecule/Breadcrumb";
// import Flex from "@/app/components/layout/Flex";
// import Breadcrumb from "@/app/components/molecule/Breadcrumb";
import Layout from "@/app/components/templates/Layout";
import Link from "next/link";
// import ProductCardListContainer from "@/app/containers/ProductCardListContainer";

import { Category, Condition } from "@/app/types/data";
// import Link from "next/link";
import { use } from "react";
import Text from "@/app/components/atoms/Text";
// import styled from "styled-components";
import Flex from "./../../components/layout/Flex/index";
import FilterGroupWithRouter from "./FilterGroupWithRouter";
import ProductCardListContainer from "@/app/containers/ProductCardListContainer";
// import ProductCardListContainer from "@/app/containers/ProductCardListContainer";
// import styled from "styled-components";

// const Anchor = styled(Text)`
//   cursor: pointer;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

const categoryNameDict: Record<Category, string> = {
  book: "책",
  shoes: "신발",
  clothes: "의류",
};

type Params = Promise<{ slug: Category[] }>;

type SearchParams = Promise<{
  [condition: string]: Condition | Condition[] | undefined;
}>;

const isCategory = (param: string): param is Category => {
  return Object.keys(categoryNameDict).includes(param);
};

const SearchPage = (props: { params: Params; searchParams: SearchParams }) => {
  const { slug } = use(props.params);
  const { condition } = use(props.searchParams);

  const __slug = Array.isArray(slug) && slug.every(isCategory) ? slug : [];

  const conditions = Array.isArray(condition)
    ? condition
    : condition
      ? [condition]
      : [];

  return (
    <Layout>
      <Box
        paddingLeft={{
          base: 2,
          md: 3,
        }}
        paddingRight={{
          base: 2,
          md: 3,
        }}
        paddingTop={2}
        paddingBottom={2}
      >
        <Box marginBottom={1}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">톱</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/search">검색</Link>
            </BreadcrumbItem>
            {/* 빵 부스러기 리스트를 선택한 카테고리에서 생성 */}
            {__slug.length !== 0 &&
              __slug.slice(0, __slug.length - 1).map((category, i) => (
                <BreadcrumbItem key={i}>
                  <Link href={`/search/${__slug.slice(0, i + 1).join("/")}`}>
                    {categoryNameDict[category] ?? "Unknown"}
                  </Link>
                </BreadcrumbItem>
              ))}
            {__slug.length == 0 && <BreadcrumbItem>모두</BreadcrumbItem>}
            {__slug.length > 0 && (
              <BreadcrumbItem>
                {categoryNameDict[__slug[slug.length - 1]] ?? "Unknown"}
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </Box>
        <Flex>
          <Flex flexDirection={{ base: "column", md: "row" }}>
            <Box as="aside" minWidth="200px" marginBottom={{ base: 2, md: 0 }}>
              {/* 상품 상태 필터 */}

              {<FilterGroupWithRouter slug={__slug} conditions={conditions} />}
              <Box paddingTop={1}>
                <Text as="h2" fontWeight="bold" variant="mediumLarge">
                  카테고리
                </Text>
                <Box>
                  <Link href="/search/" passHref>
                    모두
                  </Link>
                </Box>
                {Object.keys(categoryNameDict).map(
                  (category: string, i: number) => (
                    <Box key={i} marginTop={1}>
                      <Link href={`/search/${category}`} passHref>
                        {categoryNameDict[category as Category]}
                      </Link>
                    </Box>
                  )
                )}
              </Box>
            </Box>
            <Box>
              <Text
                as="h2"
                display={{ base: "block", md: "none" }}
                fontWeight="bold"
                variant="mediumLarge"
              >
                상품 목록
              </Text>
              {/*
                상품 카드 리스트 컨테이너
                상품 쿼리로부터 상품 카드 리스트를 표시
               */}
              <ProductCardListContainer
                category={
                  __slug.length > 0 ? __slug[__slug.length - 1] : undefined
                }
                conditions={conditions}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default SearchPage;
