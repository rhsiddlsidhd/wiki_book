"use client";
import {
  CSSPropertyGridArea,
  CSSPropertyGridAutoFlow,
  CSSPropertyGridColumn,
  CSSPropertyGridRow,
  Responsive,
} from "@/app/types/styles";
import styled from "styled-components";
import Box, { BoxProps } from "../Box";
import { toPropValue } from "@/app/utils/styles";

type GridProps = BoxProps & {
  $gridGap?: Responsive<string>;
  $gridColumnGap?: Responsive<string>;
  $gridRowGap?: Responsive<string>;
  $gridColumn?: Responsive<CSSPropertyGridColumn>;
  $gridRow?: Responsive<CSSPropertyGridRow>;
  $gridAutoFlow?: Responsive<CSSPropertyGridAutoFlow>;
  $gridAutoColumns?: Responsive<string>;
  $gridAutoRows?: Responsive<string>;
  $gridTemplateColumns?: Responsive<string>;
  $gridTemplateRows?: Responsive<string>;
  $gridTemplateAreas?: Responsive<CSSPropertyGridArea>;
  $gridArea?: Responsive<string>;
};

/**
 * Grid 컴포넌트
 * grid 레이아웃 구현에 사용한다
 */
const Grid = styled(Box)<GridProps>`
  display: grid;
  ${(props) => toPropValue("grid-gap", props.$gridGap, props.theme)}
  ${(props) =>
    toPropValue("grid-column-gap", props.$gridColumnGap, props.theme)}
  ${(props) => toPropValue("grid-row-gap", props.$gridRowGap, props.theme)}
  ${(props) => toPropValue("grid-row", props.$gridRow, props.theme)}
  ${(props) => toPropValue("grid-column", props.$gridColumn, props.theme)}
  ${(props) => toPropValue("grid-auto-flow", props.$gridAutoFlow, props.theme)}
  ${(props) =>
    toPropValue("grid-auto-columns", props.$gridAutoColumns, props.theme)}
  ${(props) => toPropValue("grid-auto-rows", props.$gridAutoRows, props.theme)}
  ${(props) =>
    toPropValue(
      "grid-template-columns",
      props.$gridTemplateColumns,
      props.theme
    )}
  ${(props) =>
    toPropValue("grid-template-rows", props.$gridTemplateRows, props.theme)}
  ${(props) =>
    toPropValue("grid-template-areas", props.$gridTemplateAreas, props.theme)}
  ${(props) => toPropValue("grid-area", props.$gridArea, props.theme)}
`;

export default Grid;
