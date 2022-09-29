import { createGlobalStyle } from "styled-components";
import { Theme } from "./types";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  body {
    background-color:  ${({ theme }) => theme.colors.body};
  }
`;
