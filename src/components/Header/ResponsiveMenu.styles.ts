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

  @media only screen and (min-width: 1200px) {
    display: none;
  }

  & button {
    font-size: 2rem;
    position: absolute;
    cursor: pointer;
    top: 4%;
    right: 5.5%;
    border: none;
    background: transparent;

    @media only screen and (max-width: 900px) {
      top: 4%;
      right: 4%;
    }
  }

  & ul {
    display: flex;
    flex-direction: column;

    & a {
      display: block;
      color: var(--color-text);
      text-decoration: none;
      text-transform: uppercase;
      position: relative;
      padding: 1rem 3rem;
      font-weight: bold;

      &:hover::after {
        width: 100%;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 1px;
        background-color: var(--color-text);
        transition: all 0.2s linear;
      }
    }
  }
`;
