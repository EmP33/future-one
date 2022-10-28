import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.75fr 1.5fr;
  column-gap: 4rem;

  @media only screen and (max-width: 1200px) {
    column-gap: 2rem;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr 1.5fr;
    column-gap: 0;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  .quote__heading {
    border-left: 10px solid var(--color-green);
    color: var(--color-green);
    padding: 5rem 2.5rem 5rem 1.75rem;
    margin: 1.5rem 0;

    @media only screen and (max-width: 1200px) {
      padding: 3rem 1.25rem 3rem;
    }

    @media only screen and (max-width: 900px) {
      padding: 2.5rem 1rem 2.5rem;
    }
  }

  .quote-content {
    display: grid;
    align-content: center;
    width: 75%;
    row-gap: 0.3rem;

    @media only screen and (max-width: 900px) {
      width: 100%;
    }

    & blockquote {
      font-style: italic;
    }

    &__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .quoteIcon--1 {
      margin-bottom: 0.5rem;
    }

    .quoteIcon--2 {
      transform: rotate(180deg);
    }
  }
`;
