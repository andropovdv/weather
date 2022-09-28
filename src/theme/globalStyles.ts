import { createGlobalStyle } from "styled-components";
import { Theme } from "./types";

interface DefaultTheme {
  colors: { body: string };
}

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  body {
    background-color:  ${({ theme }) => theme.colors.body};
  }
`;
