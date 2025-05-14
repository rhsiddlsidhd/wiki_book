"use client";
import Link from "next/link";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import Text from "../../atoms/Text";
import { useAuthContext } from "../../../context/AuthContext";
import { useShoppingCartContext } from "@/app/context/ShoppingCartContext";
import AppLogo from "../../atoms/AppLogo";
import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "../../atoms/IconButton";
import BadgeIconButton from "../../molecule/BadgeIconButton";
import ShapeImage from "../../atoms/ShapeImage";
import Spinner from "../../atoms/Spinner";
import Button from "../../atoms/Button";
import Box from "../../layout/Box";

// 헤더 루트
const HeaderRoot = styled.header`
  height: 88px;
  padding: ${({ theme }) => theme.space[2]} 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

// 내비게이션
const Nav = styled(Flex)`
  & > span:not(:first-child) {
    margin-left: ${({ theme }) => theme.space[2]};
  }
`;

// 내비게이션 링크
const NavLink = styled.span`
  display: inline;
`;

// 앵커
const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

/**
 * 헤더
 */
const Header = () => {
  const { cart } = useShoppingCartContext();
  const { authUser, isLoading } = useAuthContext();

  return (
    <HeaderRoot>
      <Flex paddingLeft={3} paddingRight={3} justifyContent="space-between">
        <Nav as="nav" height="56px" alignItems="center">
          <NavLink>
            <Link href="/" passHref>
              <Anchor>
                <AppLogo />
              </Anchor>
            </Link>
          </NavLink>
          <NavLink>
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search" passHref>
                <Anchor>모두</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search/clothes" passHref>
                <Anchor>의류</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search/book" passHref>
                <Anchor>책</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search/shoes" passHref>
                <Anchor>신발</Anchor>
              </Link>
            </Box>
          </NavLink>
        </Nav>
        <Nav as="nav" height="56px" alignItems="center">
          <NavLink>
            <Box display={{ base: "block", md: "none" }}>
              <Link href="/search" passHref>
                <Anchor>
                  <SearchIcon />
                </Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Link href="/cart" passHref>
              <Anchor>
                <BadgeIconButton
                  icon={<ShoppingCartIcon size={24} />}
                  size="24px"
                  badgeContent={cart.length === 0 ? undefined : cart.length}
                  badgeBackgroundColor="#ed9f28"
                />
              </Anchor>
            </Link>
          </NavLink>
          <NavLink>
            {(() => {
              // 인증된 상태라면 아이콘을 표시
              if (authUser) {
                return (
                  <Link href={`/users/${authUser.id}`} passHref>
                    <Anchor>
                      <ShapeImage
                        shape="circle"
                        src={authUser.profileImageUrl}
                        width={24}
                        height={24}
                        alt="ShapeImage"
                        data-testid="profile-shape-image"
                      />
                    </Anchor>
                  </Link>
                );
              } else if (isLoading) {
                // 로드 중에는 스피너를 표시
                return <Spinner size={20} strokeWidth={2} />;
              } else {
                // 로그인 하지 않은 경우에는 아이콘을 표시
                return (
                  <Link href="/signin" passHref>
                    <Anchor>
                      <PersonIcon size={24} />
                    </Anchor>
                  </Link>
                );
              }
            })()}
          </NavLink>
          <NavLink>
            <Link href="/sell" passHref>
              <Button>등록</Button>
            </Link>
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  );
};

export default Header;
