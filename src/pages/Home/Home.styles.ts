import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 85%;
  margin: 0 auto;

  @media only screen and (max-width: 1200px) {
    max-width: 90%;
  }

  @media only screen and (max-width: 900px) {
    max-width: 95%;
  }

  .hero {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 70vh;
    align-items: center;

    @media only screen and (max-width: 1200px) {
      min-height: 80vh;
      grid-template-columns: 1fr 1.5fr;
    }

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      margin-top: 3rem;
    }

    @media only screen and (max-width: 600px) {
      min-height: auto;
      margin-top: 6rem;
    }

    &-action {
      display: grid;
      align-items: center;
      align-content: center;
      justify-items: start;
      width: 450px;
      row-gap: 1.25rem;

      @media only screen and (max-width: 1200px) {
        width: 100%;
      }

      @media only screen and (max-width: 900px) {
        grid-row: 2;
      }

      & h1 {
        font-size: 3rem;
        font-weight: bold;

        @media only screen and (max-width: 1200px) {
          font-size: 2.5rem;
        }

        & span {
          color: var(--color-green);
        }
      }

      & p {
        width: 80%;
        line-height: 1.5rem;

        @media only screen and (max-width: 900px) {
          width: 100%;
        }

        @media only screen and (max-width: 600px) {
          font-size: 15px;
        }
      }
    }
  }

  .faq {
    margin: 2.5rem 0 3rem 0.75rem;

    @media only screen and (max-width: 1200px) {
      margin-top: 1.75rem;
    }

    @media only screen and (max-width: 900px) {
      margin-top: 4rem;
    }

    @media only screen and (max-width: 600px) {
      margin: 4rem 0 3rem 0;
    }

    &__title {
      font-size: 2.5rem;
      text-align: center;

      @media only screen and (max-width: 900px) {
        font-size: 2.25rem;
      }

      @media only screen and (max-width: 600px) {
        font-size: 2rem;
      }
    }

    &-content {
      margin: 1rem 0;
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 1rem;
      column-gap: 2rem;
      align-items: center;
    }
  }

  .categories {
    padding: 3rem 0;
    margin-top: 2rem;
    display: grid;
    row-gap: 1.5rem;

    &__title {
      font-weight: bold;
      font-size: 2.5rem;
    }

    & p {
      width: 75%;
      font-size: 16px;
      line-height: 24px;

      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }

    &-blocks {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      column-gap: 6.25rem;
      row-gap: 5rem;

      @media only screen and (max-width: 955px) {
        column-gap: 3rem;
        row-gap: 3rem;
      }
    }
  }
`;

export const Newsletter = styled.section`
  background: var(--color-green);
  color: var(--color-white);

  & .newsletter {
    width: 750px;
    margin: 0 auto;
    padding: 2.25rem 0;
    display: grid;
    row-gap: 1.5rem;

    @media only screen and (max-width: 1200px) {
      width: 700px;
    }

    @media only screen and (max-width: 900px) {
      width: 550px;
    }

    @media only screen and (max-width: 600px) {
      width: 95%;
    }
  }

  & h2 {
    font-size: 1.75rem;
    text-align: center;

    @media only screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  & .newsletter-action {
    display: grid;
    grid-template-columns: 1fr max-content;
    column-gap: 0.75rem;
    justify-self: stretch;

    @media only screen and (max-width: 500px) {
      row-gap: 0.75rem;
      grid-template-columns: 1fr;
    }

    & input {
      width: 100%;
      padding: 1rem;
      font-size: 14px;
      color: var(--color-green);
      border: none;

      &::placeholder {
        color: var(--color-green);
      }
    }
  }

  & p {
    text-align: center;
  }
`;
