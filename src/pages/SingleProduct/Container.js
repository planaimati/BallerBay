import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: white;
  position: relative;
  @media (max-width: 700px) {
    margin-top: 80px;
  }
`;
