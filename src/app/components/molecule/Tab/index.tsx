import Link from "next/link";
import Box from "../../layout/Box";

import { styled } from "styled-components";
import Anchor from "../../atoms/Anchor";

const NavLink = styled.span`
  display: inline;
`;

const Tab = ({ name, src }: { name: string; src: string }) => {
  return (
    <NavLink key={name}>
      <Box display={{ base: "none", md: "block" }}>
        <Link href={src} passHref>
          <Anchor>{name}</Anchor>
        </Link>
      </Box>
    </NavLink>
  );
};

export default Tab;
