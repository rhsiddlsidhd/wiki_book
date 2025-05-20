"use client";
import {
  CSSPropertyAlignContent,
  CSSPropertyAlignItems,
  CSSPropertyAlignSelf,
  CSSPropertyFlexDirection,
  CSSPropertyFlexWrap,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyJustifySelf,
  Responsive,
} from "@/app/types/styles";
import styled from "styled-components";
import Box, { BoxProps } from "../Box";
import { toPropValue } from "@/app/utils/styles";

type FlexProps = BoxProps & {
  $alignItems?: Responsive<CSSPropertyAlignItems>;
  $alignContent?: Responsive<CSSPropertyAlignContent>;
  $justifyContent?: Responsive<CSSPropertyJustifyContent>;
  $justifyItems?: Responsive<CSSPropertyJustifyItems>;
  $flexWrap?: Responsive<CSSPropertyFlexWrap>;
  $flexBasis?: Responsive<string>;
  $flexDirection?: Responsive<CSSPropertyFlexDirection>;
  $flexGrow?: Responsive<string>;
  $flexShrink?: Responsive<string>;
  $justifySelf?: Responsive<CSSPropertyJustifySelf>;
  $alignSelf?: Responsive<CSSPropertyAlignSelf>;
  $order?: Responsive<string>;
};

/**
 * Flex 컴포넌트
 * flexbox 구현에 사용한다
 */
const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${(props) => toPropValue("align-items", props.$alignItems, props.theme)}
  ${(props) => toPropValue("align-content", props.$alignContent, props.theme)}
  ${(props) =>
    toPropValue("justify-content", props.$justifyContent, props.theme)}
  ${(props) => toPropValue("justify-items", props.$justifyItems, props.theme)}
  ${(props) => toPropValue("flex-wrap", props.$flexWrap, props.theme)}
  ${(props) => toPropValue("flex-basis", props.$flexBasis, props.theme)}
  ${(props) => toPropValue("flex-direction", props.$flexDirection, props.theme)}
  ${(props) => toPropValue("flex-grow", props.$flexGrow, props.theme)}
  ${(props) => toPropValue("flex-shrink", props.$flexShrink, props.theme)}
  ${(props) => toPropValue("justify-self", props.$justifySelf, props.theme)}
  ${(props) => toPropValue("align-self", props.$alignSelf, props.theme)}
  ${(props) => toPropValue("order", props.$order, props.theme)}
`;

export default Flex;
