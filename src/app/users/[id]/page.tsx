import BreadcrumbItem from "@/components/atoms/BreadcrumbItem";
import Separator from "@/components/atoms/Separator";
import Flex from "@/components/layout/Flex";

import UserProductCardListContainer from "@/containers/UserProductCardListContainer";
import UserProfileContainer from "@/containers/UserProfileContainer";
import getAllProducts from "@/services/products/get-all-products";
import getAllUsers from "@/services/users/get-All-user";
import getUser from "@/services/users/get-user";

import Box from "@/components/layout/Box";
import Link from "next/link";
import getApiContext from "@/utils/env";
import Layout from "@/components/templates/Layout";
import Breadcrumb from "@/components/molecule/Breadcrumb";

/**
 * navigate는 useRouter를 이용
 * 단, params는 SSR에서는 props로 직접 전달됨
 * CSR은 useRouter훅 사용
 */

export const generateStaticParams = async () => {
  const context = getApiContext({ key: "serve" });

  const users = await getAllUsers(context);
  return users.map(({ id }) => ({
    id: id.toString(),
  }));
};

export const revalidate = 10;

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const context = getApiContext({ key: "serve" });
  const { id } = await params;
  const userId = Number(id);

  const [user, products] = await Promise.all([
    getUser(context, { id: userId }),
    getAllProducts(context, { userId }),
  ]);

  return (
    <Layout>
      <Flex
        $paddingTop={2}
        $paddingBottom={2}
        $paddingLeft={{ base: 2, md: 0 }}
        $paddingRight={{ base: 2, md: 0 }}
        $justifyContent="center"
      >
        <Box $width="1180px">
          <Box $marginBottom={2}>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link href="/">톱</Link>
              </BreadcrumbItem>
              {user && <BreadcrumbItem>{user.username}</BreadcrumbItem>}
            </Breadcrumb>
          </Box>
          <Box>
            <Box $marginBottom={1}>
              {/*
                사용자 프로파일 컨테이너
                사용자 정보를 표시한다. useUser로 항상 최신 데이터를 얻는다.
              */}
              <UserProfileContainer userId={userId} user={user} />
            </Box>
            <Box $marginBottom={1}>
              <Separator />
            </Box>
            {/*
              사용자 상품 카드 리스트 컨테이너
              사용자가 서유한 상품 카드 리스트를 표시한다. useSearch로 항상 최신 데이터를 얻는다.
            */}
            <UserProductCardListContainer userId={userId} products={products} />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default UserPage;
