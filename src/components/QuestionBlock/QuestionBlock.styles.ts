import styled from "styled-components";

export const Wrapper = styled.div<{ showDetails: boolean }>`
  border-bottom: 1px solid var(--color-text);
  display: grid;

  .question-answer {
    display: grid;
    grid-template-columns: 1fr max-content;
    row-gap: 0.5rem;
    height: 100%;
    padding: 1.5rem 0;
    cursor: pointer;
    transition: all 0.1s linear;
    background: ${({ showDetails }) =>
      showDetails ? "var(--color-primary)" : "transparent"};
    color: var(--color-secondary);

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-secondary);
    }

    & span {
      display: block;
    }

    & h3 {
      font-weight: bold;
      font-size: 28px;
      grid-row: 2;
    }
    & button {
      grid-row: span 2;
      display: flex;
      align-self: center;
      align-items: center;
      justify-content: center;
      height: 50px;
      width: 50px;
      font-size: 1.6rem;
      border-radius: 50%;
      border: 3px solid var(--color-green);
      background: transparent;
      color: var(--color-green);
      transform: ${({ showDetails }) =>
        showDetails ? "rotate(0)" : "rotate(-90deg)"};
      transition: all 0.15s linear;
      cursor: pointer;

      @media only screen and (max-width: 600px) {
        height: 45px;
        width: 45px;
      }
    }
  }

  .hidden-content {
    display: block;
    color: var(--font-color-1);
    max-height: ${({ showDetails }) => (showDetails ? "100px" : 0)};
    overflow: hidden;
    transition: max-height 0.3s ease-in, padding 0.4s linear;

    @media only screen and (max-width: 600px) {
      overflow: auto;
    }

    & > p {
      padding: 0.5rem 0 2rem;
    }
  }
`;
