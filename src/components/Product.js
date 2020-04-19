import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Product({ products }) {
  return (
    <ARTICLE>
      <IMGCONTAINER>
        <STYLEDLINK to={`productpage/${products.id}`}>
          <IMG src={products.image} alt="img" />
        </STYLEDLINK>
      </IMGCONTAINER>

      <DETAILS>
        <TITLE>{products.title}</TITLE>
        <Detail>{products.size} </Detail>
        <Detail>{products.price} PLN</Detail>
      </DETAILS>
    </ARTICLE>
  );
}

//styled components

const ARTICLE = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid black;
`;
const IMG = styled.img`
  width: 100%;
  min-height: 9rem;
  max-height: 20rem;
  transition: 0.5s ease;
`;

const DETAILS = styled.div`
  padding: 0rem 1rem 1rem 1rem;
  text-align: center;
  display: grid;
  grid-template-rows: 18px 18px 18px;
`;

const STYLEDLINK = styled(Link)`
  text-transform: uppercase;
  font-size: 0.8rem;
  display: inline-block;
  color: black;
  opacity: 1;
  text-decoration: none;
  transition: 0.5s ease;
  min-height: 9rem;
  max-height: 20rem;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
`;
const IMGCONTAINER = styled.div`
  padding: 1rem 1rem 0.5rem 1rem;
  position: relative;
  @media (max-width: 700px) {
    width: 50vw;
  }
`;

const TITLE = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 18px;
  margin: 0;
`;

const Detail = styled.p`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.8rem;
  margin: 0;
  line-height: 18px;
`;

export default Product;
