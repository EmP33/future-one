import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-text: #2B2D26;
    --color-green: #29CC6A;
    --color-light-gray: #A9ACAC;
    --color-gray: #787A7C;
    --color-white: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,ol {
    list-style: none;
  }

  body {
    color: var(--color-text);
    font-family: 'Roboto', sans-serif;
  }
`;

export const PrimaryButton = styled(Link)`
  padding: 0.4rem 3rem;
  background: var(--color-green);
  color: var(--color-white);
  text-decoration: none;

  &:hover {
    filter: brightness(90%);
  }
`;
