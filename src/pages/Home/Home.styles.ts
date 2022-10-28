import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  .hero {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 70vh;
    align-items: center;

    @media only screen and (max-width: 1200px) {
      height: 80vh;
      grid-template-columns: 1fr 1.5fr;
    }

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      margin-top: 3rem;
    }

    @media only screen and (max-width: 600px) {
      height: auto;
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
`;
