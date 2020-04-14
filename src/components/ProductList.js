import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { connect } from "react-redux";

function ProductList({ products, setProducts }) {
  return (
    <CENTER>
      {products.map((item) => {
        return <Product key={item.id} products={item}></Product>;
      })}
    </CENTER>
  );
}

const CENTER = styled.div`
  width: 85vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 1.8rem;
  row-gap: 1.8rem;
  @media (max-width: 700px) {
    margin-top: 100px;
  }
`;

const mapStateToProps = ({ productsState: { products } }) => {
  return {
    products: products,
  };
};

export default connect(mapStateToProps)(ProductList);
