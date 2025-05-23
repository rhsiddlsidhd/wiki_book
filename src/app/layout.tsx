import StyledJsxRegistry from "./registry";
import GlobalStyleProvider from "./global-style";
import { AuthContextProvider } from "./context/AuthContext";

import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";
import Head from "next/head";
import GlobalSpinnerContextProvider from "./context/GlobalSpinnerContext";

/**
 * server and client 분리 패턴
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
 * 공식문서에서 서버 및 클라이언트 컴포넌트를 사용할대 권장되는 몇 가지 구성 패턴을 제시해준다. (s = server , c = client)
 * 1. Fetch data = s
 * 2. Access backend resources (directly) = s
 * 3.Keep sensitive information on the server (access tokens, API keys, etc) = s
 * Keep large dependencies on the server / Reduce client-side JavaScript = s
 * Add interactivity and event listeners (onClick(), onChange(), etc) = c
 * Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc) = c
 * Use browser-only APIs = c
 * Use custom hooks that depend on state, effects, or browser-only APIs = c
 * Use React Class components = c
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Head>
        <title>wikibook C2C</title>
        <meta key="charset" name="charset" content="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="wikibook C2C는 실전적인 Next.js 애플리케이션 개발에 사용되는 데모 애플리케이션입니다."
        />
        <meta property="og:site_name" content="wikibook C2C" />
        <meta property="og:title" content="wikibook C2C의 톱페이지" />
        <meta
          property="og:description"
          content="wikibook C2C는 실전적인 Next.js 애플리케이션 개발에 사용되는 데모 애플리케이션입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000" />
        <meta
          property="og:imgae"
          content="http://localhost:3000/thumbnail.png"
        />
        <meta property="og:locale" content="ko_KR" />
      </Head>
      <body>
        <StyledJsxRegistry>
          <GlobalSpinnerContextProvider>
            <AuthContextProvider>
              <ShoppingCartContextProvider>
                <GlobalStyleProvider />
                {children}
              </ShoppingCartContextProvider>
            </AuthContextProvider>
          </GlobalSpinnerContextProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}

/**
 * Defining multiple use client entry points:

You can define multiple "use client" entry points in your React Component tree. This allows you to split your application into multiple client bundles.

However, "use client" doesn't need to be defined in every component that needs to be rendered on the client. Once you define the boundary, all child components and modules imported into it are considered part of the client bundle.
 * 부모 컴포넌트가 use client라 해서 자식 요소가 모두 client가 되는게 아니라 파일 내 import 해온 다른 컴포넌트들이 자동으로 클라이언트 번들로 포함된다
import { fetcher } from '@/app/utils';
import { fetcher } from './utils/index';

  App 디렉토리 nextjs 구조는 명시적인 use client가 없다면 default로 server 컴포넌트로 간주한다
 */
