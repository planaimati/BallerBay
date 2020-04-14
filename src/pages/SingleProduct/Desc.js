import styled from "styled-components";

export const Desc = styled.p`
  font-weight: 300;
  text-transform: uppercase;
  transition: 10s ease;
  font-size: 0.8rem;
  text-align: left;
  display: ${(props) => (props.desc === true ? "block" : "none")};
  width: 80%;
  margin-bottom: 10px;
`;
