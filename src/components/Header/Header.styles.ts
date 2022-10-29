import styled from "styled-components";

export const Wrapper = styled.header`
  max-width: 85%;
  margin: 4rem auto 0;
  display: grid;
  grid-template-columns: max-content 1fr;
  min-height: 100px;

  @media only screen and (max-width: 1200px) {
    max-width: 90%;
    min-height: 0;
    margin: 2rem auto 0;
  }

  @media only screen and (max-width: 900px) {
    max-width: 95%;
  }

  .header-logo {
    align-self: end;
    margin-right: 1.25rem;

    @media only screen and (max-width: 1300px) {
      margin-right: 1rem;
    }

    & span {
      font-size: 34px;
      font-weight: bold;
    }
  }

  & nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-self: start;

    @media only screen and (max-width: 1200px) {
      display: none;
    }

    & ul {
      display: flex;
      column-gap: 2.5rem;
      align-items: center;

      @media only screen and (max-width: 1300px) {
        column-gap: 2rem;
      }

      & a {
        color: var(--color-gray);
        text-decoration: none;

        &.active {
          color: var(--color-text);
          text-decoration: underline;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  & button {
    font-size: 2rem;
    justify-self: end;
    align-self: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    background: transparent;

    @media only screen and (min-width: 1200px) {
      display: none;
    }
  }
`;
