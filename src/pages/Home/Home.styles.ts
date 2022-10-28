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

  .quote {
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

    &__heading {
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

    &-content {
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
  }
`;
