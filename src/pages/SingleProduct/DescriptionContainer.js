import styled from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 10s ease;

  align-items: center;
  @media (max-width: 1000px) {
    margin-top: 50px;
  }
`;
