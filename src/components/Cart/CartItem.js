import React from "react";
//styled
import { Article } from "./Article";
import { Img } from "./Img";
import { Container } from "./Container";
import { Button } from "./Button";
import { Desc } from "./Desc";
//redux
import { connect } from "react-redux";
import { deleteItem } from "../../actions/actions";

function CartItem(props) {
  console.log(props);

  return (
    <Article>
      <Img src={props.image} alt="" />
      <Container>
        <h4>{props.title}</h4>
        <Desc>marka: {props.designer}</Desc>
        <Desc>cena: {props.price} PLN</Desc>
        <Desc>rozmiar: {props.size}</Desc>
        <Desc>kolor: {props.color}</Desc>

        <Button onClick={() => props.deleteItem()}>usuń</Button>
      </Container>
    </Article>
  );
}

const mapStateToProps = ({ productsState: { cart, total } }) => {
  return {
    cart: cart,
    total: total,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;

  return {
    deleteItem: () => dispatch(deleteItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
