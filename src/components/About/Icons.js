import styled from "styled-components";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const HrefIG = styled(FaInstagram)`
  text-decoration: none;
  color: black;
  font-size: 2rem;
  margin: 20px;
`;

export const HrefFB = styled(FaFacebookSquare)`
  text-decoration: none;
  color: black;
  font-size: 2rem;
  margin: 20px;
`;
