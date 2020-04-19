import React from "react";
//styled components
import styled from "styled-components";
import List from "./List";
import { AiOutlineShopping } from "react-icons/ai";
//react redux
import { connect } from "react-redux";
//react router
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar({ cartProducts }) {
  //funkcja która zwraca obiekt z info na temat aktualnej lokacji
  let location = useLocation();

  return (
    <Header
      color={
        location.pathname === "/" || location.pathname === "default"
          ? "white"
          : "black"
      }
    >
      <Navigation>
        <LogoLink to="/">
          <Logo color={location.pathname === "/" ? "white" : "black"}>
            baller bay
          </Logo>
        </LogoLink>

        <ShopIcon>
          <Link to="/cart">
            <AiOutlineShoppingIcon
              color={location.pathname === "/" ? "white" : null}
            ></AiOutlineShoppingIcon>
          </Link>

          <ItemAmount color={location.pathname === "/" ? "white" : null}>
            {cartProducts}
          </ItemAmount>
        </ShopIcon>

        <ListContainer>
          <List></List>
        </ListContainer>
      </Navigation>
    </Header>
  );
}

//styled components

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const ItemAmount = styled.p`
  color: white;
  margin: 0;
  color: ${(props) => (props.color === "white" ? "white" : "black")};
`;

const AiOutlineShoppingIcon = styled(AiOutlineShopping)`
  color: white;
  font-size: 1.5rem;
  color: ${(props) => (props.color === "white" ? "white" : "black")};
`;

const ShopIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  margin: 0;
  padding: 0;
  left: 0;

  z-index: 1;
  background: ${(props) => (props.color === "white" ? "transparent" : "white")};
`;

const Navigation = styled.nav`
  z-index: 1;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  position: relative;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: ${(props) => props.theme.spacing.mainSpacing};
  color: ${(props) => (props.color === "white" ? "white" : "black")};
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const mapStateToProps = ({ productsState: { cartProducts } }) => {
  return { cartProducts: cartProducts };
};

export default connect(mapStateToProps)(Navbar);
