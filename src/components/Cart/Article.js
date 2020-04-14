import styled from "styled-components";

export const Article = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
  min-height: 350px;

  @media (max-width: 700px) {
    grid-column-gap: 0;
    grid-template-columns: 1fr;
    border-bottom: 1px solid black;
  }
`;
