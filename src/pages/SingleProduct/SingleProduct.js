import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  ADD_ITEM_TO_CART,
  SET_PRODUCTS_INFO,
  SET_DELIVERY_INFO,
} from "../../actions/actions";
//styled
import { Container } from "./Container";
import { ItemsContainer } from "./ItemsContainer";
import { ItemContainer } from "./ItemContainer";
import { Image } from "./Image";
import { H5 } from "./H5";
import { H3 } from "./H3";
import { DescriptionContainer } from "./DescriptionContainer";
import { Button } from "./Button";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa";
import { Desc } from "./Desc";

function SingleProduct({
  products,
  addCart,
  productInfo,
  setProductInfo,
  setDeliveryInfo,
  deliveryInfo,
}) {
  const { id } = useParams();
  const singleProduct = products.find((item) => {
    return item.id === id;
  });

  if (products.length === 0) {
    return <h1>loading...</h1>;
  }

  return (
    <Container>
      <ItemsContainer>
        <ItemContainer>
          <DescriptionContainer props="left">
            <H3>{singleProduct.title}</H3>
            <H5>
              opis
              {productInfo === true ? (
                <FaMinus onClick={setProductInfo}></FaMinus>
              ) : (
                <GoPlus onClick={setProductInfo}></GoPlus>
              )}
            </H5>
            <Desc desc={productInfo}>{singleProduct.desc}</Desc>

            <H5>
              dostawa
              {deliveryInfo === true ? (
                <FaMinus onClick={setDeliveryInfo}></FaMinus>
              ) : (
                <GoPlus onClick={setDeliveryInfo}></GoPlus>
              )}
            </H5>
            <Desc desc={deliveryInfo}>{singleProduct.delivery}</Desc>
          </DescriptionContainer>
        </ItemContainer>
        <ItemContainer>
          <Image src={singleProduct.image} alt={null} />
        </ItemContainer>
        <ItemContainer>
          <DescriptionContainer>
            <H3>{singleProduct.price} zł</H3>
            <H5>
              {singleProduct.avilable === true
                ? "produkt dostępny"
                : "produkt niedostępny"}
            </H5>
            <Button onClick={() => addCart()}>dodaj do koszyka</Button>
          </DescriptionContainer>
        </ItemContainer>
      </ItemsContainer>
    </Container>
  );
}

const mapStateToProps = ({ productsState }) => {
  return {
    products: productsState.products,
    productInfo: productsState.productInfo,
    deliveryInfo: productsState.deliveryInfo,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;

  return {
    setDeliveryInfo: () => dispatch({ type: SET_DELIVERY_INFO }),
    setProductInfo: () => dispatch({ type: SET_PRODUCTS_INFO }),
    addCart: () => dispatch({ type: ADD_ITEM_TO_CART, payload: { id: id } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
