import styled from "styled-components";

export const Title = styled.h4`
  font-weight: 700;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  letter-spacing: ${(props) => props.theme.spacing.mainSpacing};
  color: black;
`;
