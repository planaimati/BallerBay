import styled from "styled-components";

export const ImageContainer = styled.div`
  background: url(https://images.unsplash.com/photo-1575176648002-f2021e56b375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 600px;
  @media (max-width: 700px) {
    background-size: cover;
    background-position: center;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f0f0f0;
  padding: 10px 15px 10px 15px;
  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`;
export const Container = styled.div`
  width: 90%;
  margin-top: 0;
  gap: 10vh;
  height: 75vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 300px;
  }
`;
