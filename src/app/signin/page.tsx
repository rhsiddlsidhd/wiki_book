import type { NextPage } from "next";
import Layout from "../components/templates/Layout";
import Flex from "../components/layout/Flex";
import AppLogo from "../components/atoms/AppLogo";
import Box from "../components/layout/Box";
import SigninFormSuspenseWrapper from "../containers/SigninFormSuspenseWrapper";

const SigninPage: NextPage = () => {
  return (
    <Layout>
      <Flex
        $paddingTop={2}
        $paddingBottom={2}
        $paddingLeft={{ base: 2, md: 0 }}
        $paddingRight={{ base: 2, md: 0 }}
        $justifyContent="center"
      >
        <Flex
          $width="400px"
          $flexDirection="column"
          $justifyContent="center"
          $alignItems="center"
        >
          <Box $marginBottom={2}>
            <AppLogo />
          </Box>
          <Box $width="100%">
            {/*
              로그인폼 컨테이너
              SigninForm의 사용자명/비밀번호로부터 인증 API를 호출하고,
              onSignin 콜백이 호출된다
            */}
            <SigninFormSuspenseWrapper />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default SigninPage;
