import React from "react";
import styled from "styled-components";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter/Filter";

function Products({ setProducts }) {
  return (
    <SECTION>
      <Filter></Filter>
      <ProductList></ProductList>
    </SECTION>
  );
}

const SECTION = styled.div`
  padding: 8rem 0 0 0;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export default Products;
