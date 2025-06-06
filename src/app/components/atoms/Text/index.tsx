"use client";
import { Responsive } from "@/app/types/styles";
import {
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  Space,
  toPropValue,
} from "@/app/utils/styles";
import styled from "styled-components";

// 텍스트 변형
export type TextVariant =
  | "extraSmall"
  | "small"
  | "medium"
  | "mediumLarge"
  | "large"
  | "extraLarge";

export type TextProps = {
  variant?: TextVariant;
  fontSize?: Responsive<FontSize>;
  fontWeight?: Responsive<string>;
  letterSpacing?: Responsive<LetterSpacing>;
  lineHeight?: Responsive<LineHeight>;
  textAlign?: Responsive<string>;
  color?: Responsive<Color>;
  backgroundColor?: Responsive<Color>;
  width?: Responsive<string>;
  height?: Responsive<string>;
  minWidth?: Responsive<string>;
  minHeight?: Responsive<string>;
  display?: Responsive<string>;
  border?: Responsive<string>;
  overflow?: Responsive<string>;
  margin?: Responsive<Space>;
  marginTop?: Responsive<Space>;
  marginRight?: Responsive<Space>;
  marginBottom?: Responsive<Space>;
  marginLeft?: Responsive<Space>;
  padding?: Responsive<Space>;
  paddingTop?: Responsive<Space>;
  paddingRight?: Responsive<Space>;
  paddingBottom?: Responsive<Space>;
  paddingLeft?: Responsive<Space>;
};

const variants = {
  extraSmall: {
    fontSize: "extraSmall",
    letterSpacing: 0,
    lineHeight: 0,
  },
  small: {
    fontSize: "small",
    letterSpacing: 1,
    lineHeight: 1,
  },
  medium: {
    fontSize: "medium",
    letterSpacing: 2,
    lineHeight: 2,
  },
  mediumLarge: {
    fontSize: "mediumLarge",
    letterSpacing: 3,
    lineHeight: 3,
  },
  large: {
    fontSize: "large",
    letterSpacing: 4,
    lineHeight: 4,
  },
  extraLarge: {
    fontSize: "extraLarge",
    letterSpacing: 5,
    lineHeight: 5,
  },
};

/**
 * 텍스트
 * 변형, 색상, 타이포그래피, 레이아웃, 스페이스 관련 Props 추가
 */
const Text = styled.span<TextProps>`
  ${({ variant = "medium", fontSize, letterSpacing, lineHeight, theme }) => {
    // 변형 스타일에 적용
    if (variant && variants[variant]) {
      const styles = [];
      if (!fontSize) {
        styles.push(
          toPropValue("font-size", variants[variant].fontSize, theme)
        );
      }

      if (!letterSpacing) {
        styles.push(
          toPropValue("letter-spacing", variants[variant].letterSpacing, theme)
        );
      }
      if (!lineHeight) {
        styles.push(
          toPropValue("line-height", variants[variant].lineHeight, theme)
        );
      }

      return styles.join("\n");
    }
  }}
  ${(props) => toPropValue("font-size", props.fontSize, props.theme)}
  ${(props) => toPropValue("letter-spacing", props.letterSpacing, props.theme)}
  ${(props) => toPropValue("line-height", props.lineHeight, props.theme)}
  ${(props) => toPropValue("color", props.color ?? "text", props.theme)}
  ${(props) =>
    toPropValue("background-color", props.backgroundColor, props.theme)}
  ${(props) => toPropValue("width", props.width, props.theme)}
  ${(props) => toPropValue("height", props.height, props.theme)}
  ${(props) => toPropValue("min-width", props.minWidth, props.theme)}
  ${(props) => toPropValue("min-height", props.minHeight, props.theme)}
  ${(props) => toPropValue("display", props.display, props.theme)}
  ${(props) => toPropValue("border", props.border, props.theme)}
  ${(props) => toPropValue("overflow", props.overflow, props.theme)}
  ${(props) => toPropValue("margin", props.margin, props.theme)}
  ${(props) => toPropValue("margin-top", props.marginTop, props.theme)}
  ${(props) => toPropValue("margin-left", props.marginLeft, props.theme)}
  ${(props) => toPropValue("margin-bottom", props.marginBottom, props.theme)}
  ${(props) => toPropValue("margin-right", props.marginRight, props.theme)}
  ${(props) => toPropValue("padding", props.padding, props.theme)}
  ${(props) => toPropValue("padding-top", props.paddingTop, props.theme)}
  ${(props) => toPropValue("padding-left", props.paddingLeft, props.theme)}
  ${(props) => toPropValue("padding-bottom", props.paddingBottom, props.theme)}
  ${(props) => toPropValue("padding-right", props.paddingRight, props.theme)}
`;

export default Text;
