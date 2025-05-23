"use client";

import styled from "styled-components";
import Flex from "../../layout/Flex";

const BreadcrumbRoot = styled(Flex)`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

interface BreadcrumbProps {
  children?: React.ReactNode;
}

/**
 * 빵 부스러기 리스트
 */
const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return <BreadcrumbRoot as="ol">{children}</BreadcrumbRoot>;
};

export default Breadcrumb;
