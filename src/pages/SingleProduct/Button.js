import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  background: black;
  text-transform: uppercase;
  color: white;
  border: 0px solid black;
  height: 2.5rem;
  font-size: 0.8rem;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: black;
    background: white;
    border: 1px solid black;
  }
`;
