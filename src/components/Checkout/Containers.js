import styled from "styled-components";

export const ImageContainer = styled.div`
  background: url(https://images.unsplash.com/photo-1545964142-85c36a445a3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80);
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
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 50% 50%;
  background: #f0f0f0;
  padding: 10px 15px 10px 15px;
`;
