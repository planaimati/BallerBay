import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function List() {
  let location = useLocation();

  return (
    <UL>
      <LI>
        <STYLEDLINK
          color={location.pathname === "/" ? "white" : "black"}
          activeClassName="active"
          exact
          to="/"
        >
          Home
        </STYLEDLINK>
      </LI>
      <LI>
        <STYLEDLINK
          color={location.pathname === "/" ? "white" : "black"}
          activeClassName="active"
          to="/about"
        >
          O mnie
        </STYLEDLINK>
      </LI>
      <LI>
        <STYLEDLINK
          color={location.pathname === "/" ? "white" : "black"}
          activeClassName="active"
          to="/contact"
        >
          Kontakt
        </STYLEDLINK>
      </LI>
      <LI>
        <STYLEDLINK
          color={location.pathname === "/" ? "white" : "black"}
          activeClassName="active"
          to="/productpage"
        >
          Produkty
        </STYLEDLINK>
      </LI>
      <LI>
        <STYLEDLINK
          color={location.pathname === "/" ? "white" : "black"}
          activeClassName="active"
          to="/cart"
        >
          Koszyk
        </STYLEDLINK>
      </LI>
    </UL>
  );
}

const UL = styled.ul`
  padding: 0;
  display: grid;
  list-style: none;
  margin: 0;

  grid-template-columns: 100px 100px 100px 100px 100px;
  text-transform: uppercase;
  text-decoration: none;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const LI = styled.li`
  text-align: center;
  @media (max-width: 500px) {
    padding: 5px;
  }
`;

const STYLEDLINK = styled(NavLink)`
  font-size: 0.75rem;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 0.07rem;
  text-decoration: none;
  color: ${(props) => (props.color === "white" ? "white" : "black")};
  @media (max-width: 500px) {
    letter-spacing: 0.3rem;
    font-size: 1rem;
  }

  &.active {
    font-weight: 700;
  }
`;

export default List;
