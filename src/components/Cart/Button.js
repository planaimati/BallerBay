import styled from "styled-components";

export const Button = styled.button`
  border: 0px solid black;
  width: 150px;
  height: 2rem;
  background: black;
  color: white;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: pointer;
  @media (max-width: 700px) {
    margin-bottom: 10px;
  }

  transition: 0.5s;

  &:hover {
    border: 1px solid black;
    color: black;
    background: white;
  }
`;
