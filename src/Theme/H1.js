import styled from "styled-components";

export const MAINH1 = styled.p`
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: ${(props) => props.theme.spacing.mainSpacing};
  color: black;

  @media (max-width: 700px) and (orientation: landscape) {
    display: none;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;
