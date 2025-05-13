import type { Preview } from "@storybook/react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import React from "react";
import theme from "./../src/app/themes/index";

const GlobalStyle = createGlobalStyle`
 html,body,textarea {
    padding:0;
    margin:0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans, Helvetica Neue,sans-serif; 
  }
  * {
    box-sizing: border-box;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    transition: .25s;
    color:#000;
  }

  ol,ul{
    list-style: none;
  }

`;
/**
 * next/img의 최적화 기능을 storybook 환경에서
 * 비활성화 하기 위한 방식
 *
 * 단순 img 처럼 작동하도록 next/image 컴포넌트를 오버라이딩
 *
 * why? next 환경에서는 next/Image 컴포넌트 사용시 자동으로 최적화를 진행해줌
 *  next 환경이 아닌 외부 환경에서는 오류를 막기 위해 최적화 기능을 비활성화 하여 오류 방지
 */

const NoOptimizeNextImage = (props: any) => {
  const { src, ...rest } = props;
  return <img src={src} {...rest} />;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story context={{ NextImage: NoOptimizeNextImage }} />
      </ThemeProvider>
    ),
  ],
};

export default preview;
