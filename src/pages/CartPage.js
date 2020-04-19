import React from "react";
import styled from "styled-components";
import CartItem from "../components/Cart/CartItem";
import { MainLink } from "../Theme/MainLink";
//react redux
import { GET_TOTAL } from "../actions/actions";
import { connect } from "react-redux";

function CartPage({ cart, getTotal, total }) {
  //przy każdym renderowaniu wywowaływana jest funkcja getTotal() która sumuje łączną cenę zamówienia
  React.useEffect(() => {
    getTotal();
  }, [getTotal]);

  if (cart.length === 0) {
    return (
      <Container>
        <p>Twój koszyk jest obecnie pusty</p>
        <MainLink to="/productpage">kontynuuj zakupy</MainLink>
      </Container>
    );
  } else if (cart.length !== 0) {
    return (
      <Container>
        <div>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item}></CartItem>;
          })}
        </div>
        <p>RAZEM: {total} PLN</p>
        <MainLink to="/checkout">zapłać</MainLink>
      </Container>
    );
  }
}

//styled

const Container = styled.section`
  padding-top: 150px;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 auto;
  width: 80vw;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    min-height: 80vh;
  }
`;
//react redux
const mapStateToProps = ({ productsState: { cart, total } }) => {
  return {
    cart: cart,
    total: total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTotal: () => dispatch({ type: GET_TOTAL }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
