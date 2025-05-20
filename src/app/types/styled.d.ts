import "styled-components";
import theme from "./../themes/index";

// 기존 기본 DefaultTheme 타입 (기본 테마 타입)
import type { DefaultTheme as SCDefaultTheme } from "styled-components";

type Theme = typeof theme;

// 기존 DefaultTheme과 내 커스텀 테마를 합친다
declare module "styled-components" {
  // 내 DefaultTheme은 기존 + 내 테마 합친 타입으로 정의
  export interface DefaultTheme extends SCDefaultTheme, Theme {}
}
