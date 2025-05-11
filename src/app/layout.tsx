import StyledJsxRegistry from "./registry";
import GlobalStyleProvider from "./global-style";
import ThemeContextProvier from "./ThemeContextProvier";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <meta key="charset" name="charset" content="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <StyledJsxRegistry>
          <ThemeContextProvier>
            <GlobalStyleProvider />
            {children}
          </ThemeContextProvier>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
