import StyledJsxRegistry from "./registry";
import GlobalStyleProvider from "./global-style";
import { AuthContextProvider } from "./context/AuthContext";
import { ApiContext } from "./types/data";
import envSchema from "./utils/env";
import GlobalSpinnerContextProvider from "./context/GlobalSpinnerContext";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";

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
  const context: ApiContext = {
    apiRootUrl: envSchema.parse(process.env).NEXT_PUBLIC_API_BASE_PATH,
  };
  return (
    <html>
      <meta key="charset" name="charset" content="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <StyledJsxRegistry>
          <AuthContextProvider context={context}>
            <ShoppingCartContextProvider>
              <GlobalStyleProvider />
              {children}
            </ShoppingCartContextProvider>
          </AuthContextProvider>
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
