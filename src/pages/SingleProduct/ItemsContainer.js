import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 90%;
  max-height: 100vh;
  background: black;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 3fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
