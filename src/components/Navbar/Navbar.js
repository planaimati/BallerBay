import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { SCROLL } from "../../actions/actions";
import { useLocation } from "react-router-dom";
import List from "./List";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar({ cartProducts, products }) {
  let location = useLocation();

  console.log(location);

  return (
    <Header
      color={
        location.pathname === "/" || location.pathname === "default"
          ? "white"
          : "black"
      }
    >
      <Navigation>
        <Logo color={location.pathname === "/" ? "white" : "black"}>
          baller bay
        </Logo>
        <ShopIcon>
          <Link to="/cart">
            {" "}
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

const mapStateToProps = ({ productsState: { cartProducts, products } }) => {
  return { cartProducts: cartProducts, products };
};

const mapDispatchToProps = (dispatch) => {
  return {
    scroll: () =>
      dispatch({ type: SCROLL, payload: { heigh: window.pageYOffset } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

// heigh={heigh}
//navColor={
//location.pathname === "/" || location.pathname ? "white" : "black"
//}
