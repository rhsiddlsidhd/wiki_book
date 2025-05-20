import type { NextPage } from "next";

import Layout from "../components/templates/Layout";
import Flex from "../components/layout/Flex";
import Box from "../components/layout/Box";
import AppLogo from "../components/atoms/AppLogo";
import ProductFormContainer from "../containers/ProductFormContainer";

const SellPage: NextPage = () => {
  return (
    <Layout>
      <Flex
        $paddingTop={{
          base: 2,
          md: 4,
        }}
        $paddingBottom={{
          base: 2,
          md: 4,
        }}
        $paddingLeft={{ base: 2, md: 0 }}
        $paddingRight={{ base: 2, md: 0 }}
        $justifyContent="center"
      >
        <Flex
          $width="800px"
          $flexDirection="column"
          $justifyContent="center"
          $alignItems="center"
        >
          <Box $display={{ base: "none", md: "block" }} $marginBottom={2}>
            <AppLogo />
          </Box>
          <Box $width="100%">
            {/*
              상품 게시폼 컨테이너
              상품 정보를 입력하고 제품 API를 통해 상품을 저장
            */}
            <ProductFormContainer />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default SellPage;
