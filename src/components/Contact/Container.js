import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 70vh;
  width: 50vw;
  border-radius: 100px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    width: 90vw;
    height: 60vh;
    margin-top: 150px;
    margin-bottom: 20px;
  }
`;
