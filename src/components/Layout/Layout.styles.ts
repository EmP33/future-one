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
`;
