import React from "react";
//react router
import { useParams } from "react-router-dom";
//react-redux
import { connect } from "react-redux";
import { ADD_ITEM_TO_CART } from "../../actions/actions";
//styled components
import { Container } from "./Container";
import { ItemsContainer } from "./ItemsContainer";
import { ItemContainer } from "./ItemContainer";
import { Image } from "./Image";
import { H5 } from "./H5";
import { H3 } from "./H3";
import { DescriptionContainer } from "./DescriptionContainer";
import { Button } from "./Button";
import { Desc } from "./Desc";

function SingleProduct({ products, addCart }) {
  //funkcja use params zwracam nam obiekt z id
  const { id } = useParams();
  //renderujemy produkt którego id jest takie samo jak id zwrócone przez funkcję useParams()
  const singleProduct = products.find((item) => {
    return item.id === id;
  });
  //jeśli produkty nie zostały pobrane z API to wyświetla się loading
  if (products.length === 0) {
    return <h1>loading...</h1>;
  }
  // w przeciwnym razie renderowany jest komponent produktu
  return (
    <Container>
      <ItemsContainer>
        <ItemContainer>
          <DescriptionContainer props="left">
            <H3>{singleProduct.title}</H3>
            <H5>opis:</H5>
            <Desc>{singleProduct.desc}</Desc>
            <H5>dostawa:</H5>
            <Desc>{singleProduct.delivery}</Desc>
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

//react redux

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
    addCart: () => dispatch({ type: ADD_ITEM_TO_CART, payload: { id: id } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
