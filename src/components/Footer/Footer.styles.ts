import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  background-color: var(--color-text);
  color: var(--color-white);
  padding: 4rem 0 1.5rem;

  @media only screen and (max-width: 600px) {
    padding: 4rem 0 0.5rem;
  }

  @media only screen and (max-width: 400px) {
    padding: 2.5rem 0 0.5rem;
  }

  .footer-wrapper {
    max-width: 85%;
    margin: 0 auto;

    @media only screen and (max-width: 1200px) {
      max-width: 90%;
    }

    @media only screen and (max-width: 900px) {
      max-width: 95%;
    }
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(2, max-content) 1fr;
    column-gap: 7.5rem;
    justify-items: center;

    @media only screen and (max-width: 800px) {
      column-gap: 3rem;
    }

    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 400px) {
      grid-template-columns: 1fr;
    }
  }

  .socials {
    justify-self: end;
    align-self: end;
    padding: 0 1.5rem 2.5rem 0;

    @media only screen and (max-width: 600px) {
      grid-column: 1/-1;
      padding: 0;
      justify-self: center;
      padding-bottom: 1rem;
    }

    & a {
      margin: 0 0.25rem;

      & svg {
        font-size: 1.6rem;
        color: var(--color-green);
      }

      &:hover {
        filter: brightness(75%);
      }
    }
  }

  .copyright {
    border-top: 1px solid var(--color-green);
    padding: 0.75rem 0;
    display: grid;
    grid-template-columns: repeat(4, max-content);
    align-items: center;
    font-size: 14px;
    column-gap: 4rem;

    @media only screen and (max-width: 1000px) {
      column-gap: 1.5rem;
    }

    @media only screen and (max-width: 800px) {
      grid-template-columns: 1fr;
      row-gap: 0.5rem;
    }

    & span {
      @media only screen and (max-width: 800px) {
        margin-top: 0.5rem;
        grid-row: 4;
      }
      @media only screen and (max-width: 600px) {
        text-align: center;
      }
    }

    & a {
      color: var(--color-white);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const FooterBlockWrapper = styled.div`
  display: grid;
  row-gap: 1rem;
  padding-bottom: 7rem;

  @media only screen and (max-width: 600px) {
    padding-bottom: 5rem;
  }

  @media only screen and (max-width: 400px) {
    padding-bottom: 3rem;
  }

  & h3 {
    font-size: 20px;
  }

  & ul {
    display: grid;
    row-gap: 1.25rem;

    & a {
      color: var(--color-white);
      text-decoration: none;
      font-weight: 300;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
