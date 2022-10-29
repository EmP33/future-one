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

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--color-gray); 
  }
    
  ::-webkit-scrollbar-thumb {
    background: var(--color-green); 
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #25b05c; 
  }
`;

export const OutlineButton = styled.button`
  padding: 0.75rem 2.5rem;
  position: relative;
  background: transparent;
  color: var(--color-white);
  font-size: 16px;
  text-decoration: none;
  border: 2px solid var(--color-white);
  cursor: pointer;
  z-index: 0;
  overflow: hidden;
  transition: all 0.15s linear;

  &:hover::before {
    transform: translateX(0);
  }
  &:hover {
    color: var(--color-green);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: var(--color-white);
    width: 100%;
    height: 100%;
    transform: translateX(-105%) skew(-15deg);
    z-index: -1;
    transition: all 0.15s linear;
  }

  & span {
    display: block;
    z-index: 2;
  }
`;

export const PrimaryButton = styled(Link)<{
  size?: "big" | "normal" | "small";
}>`
  position: relative;
  padding: ${({ size }) => (size === "big" ? ".75rem 3.5rem" : "0.4rem 3rem")};
  background: var(--color-green);
  color: var(--color-white);
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  transition: all 0.15s linear;
  border: 2px solid var(--color-green);

  &:hover::before {
    transform: translateX(0);
  }
  &:hover {
    color: var(--color-green);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: var(--color-white);
    width: 100%;
    height: 100%;
    transform: translateX(-105%) skew(-15deg);
    z-index: -1;
    transition: all 0.15s linear;
  }

  & span {
    display: block;
    z-index: 2;
  }
`;
