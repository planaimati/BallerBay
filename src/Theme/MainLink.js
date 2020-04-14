import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainLink = styled(Link)`
  text-decoration: none;
  display: block;
  height: 2.5rem;
  width: 240px;
  line-height: 2.5rem;
  margin-top: 30px;
  text-transform: uppercase;
  text-align: center;
  font-size: 1rem;
  color: ${(props) => (props.dark ? "white" : "black")};
  border: 2px solid;
  border-color: ${(props) => (props.dark ? "white" : "black")};
`;
