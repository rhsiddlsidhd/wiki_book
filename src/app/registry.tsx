"use client";

import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { StyleRegistry, createStyleRegistry } from "styled-jsx";
import theme from "./themes/index";
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
      <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
    </ThemeProvider>
  );
}
