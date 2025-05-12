"use client";
import { styled } from "styled-components";

export default function Home() {
  return (
    <>
      <Container>123</Container>
    </>
  );
}

const Container = styled.section`
  font-size: ${(props) => props.theme.fontSizes[3]};
  padding: 20px;
  border-radius: 5px;
`;
