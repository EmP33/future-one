import styled from "styled-components";

export const Wrapper = styled.div`
  box-shadow: 0px 2px 8px rgba(41, 55, 69, 0.15);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  position: relative;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: var(--color-green);
  }
  &:hover svg {
    color: var(--color-white);
    fill: var(--color-white);
  }
  &:hover svg path {
    fill: var(--color-white);
  }

  & svg {
    font-size: 3rem;
    color: var(--color-light-gray);
  }

  & span {
    position: absolute;
    bottom: 15px;
    right: 5px;
    display: flex;
    align-items: center;
    color: var(--color-white);
    text-decoration: underline;

    & svg {
      font-size: 1.5rem;
      color: var(--color-green);
    }
  }
`;
