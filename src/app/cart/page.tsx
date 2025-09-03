import type { NextPage } from "next";
import Link from "next/link";

import Flex from "../../components/layout/Flex";

import BreadcrumbItem from "../../components/atoms/BreadcrumbItem/index";
import Text from "../../components/atoms/Text";
import CartContainer from "../../containers/CartContainer";
import Box from "../../components/layout/Box";
import Layout from "@/components/templates/Layout";
import Breadcrumb from "@/components/molecule/Breadcrumb";

const CartPage: NextPage = () => {
  // 인증 가드
  // /cart 로 이동
  // 로그인 한 유저인지 아닌지 유뮤 확인
  // current 로그인 유무는

  return (
    <Layout>
      <Flex
        $paddingTop={2}
        $paddingBottom={2}
        $paddingLeft={{ base: 2, md: 0 }}
        $paddingRight={{ base: 2, md: 0 }}
        $justifyContent="center"
      >
        <Box $width="1240px">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">톱</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>카트</BreadcrumbItem>
          </Breadcrumb>
          <Box>
            <Text display="block" variant="large" as="h1">
              카트
            </Text>
            {/*
              카트 컨테이너
              카트 안에 있는 상품을 표시, 구입, 삭제
            */}
            <CartContainer />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default CartPage;
