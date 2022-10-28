import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 10rem; // TO DELETE

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
