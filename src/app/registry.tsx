"use client";

import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { StyleRegistry, createStyleRegistry } from "styled-jsx";
import theme from "../themes/index";
import isPropValid from "@emotion/is-prop-valid";
export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return <>{styles}</>;
  });

  return (
    <ThemeProvider theme={theme}>
      <StyleRegistry registry={jsxStyleRegistry}>
        <StyleSheetManager shouldForwardProp={isPropValid}>
          {children}
        </StyleSheetManager>
      </StyleRegistry>
    </ThemeProvider>
  );
}
