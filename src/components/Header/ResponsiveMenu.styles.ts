import styled from "styled-components";

export const Wrapper = styled.nav<{ showMenu: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: var(--color-green);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.2s linear;
  transform: ${({ showMenu }) =>
    showMenu ? "translateX(0)" : "translateX(100%)"};

  & svg {
    font-size: 2rem;
    position: absolute;
    top: 2.5%;
    right: 2.5%;
    cursor: pointer;
  }

  & ul {
    display: flex;
    flex-direction: column;

    & a {
      display: block;
      color: var(--color-text);
      text-decoration: none;
      text-transform: uppercase;
      padding: 1rem 3rem;
      font-weight: bold;
    }
  }
`;
