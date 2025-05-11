import "styled-components";
import theme from "./../themes/index";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
