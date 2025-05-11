"use client";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./themes";

const ThemeContextProvier = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContextProvier;
