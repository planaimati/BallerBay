import React from "react";
//react redux
import { connect } from "react-redux";
import { SET_SEARCH_VALUE, SET_SEARCH_PRODUCTS } from "../../actions/actions";
//styled components/ icons
import { GoSearch } from "react-icons/go";
import styled from "styled-components";

function Filter({ searchValue, setSearch, setSearchProducts }) {
  return (
    <section>
      <Container>
        <Form>
          <Input
            placeholder=""
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearch(e);
              setSearchProducts();
            }}
          />
          <IconContainer>
            <GoSearch></GoSearch>
          </IconContainer>
        </Form>
      </Container>
    </section>
  );
}
const Input = styled.input`
  width: 100%;
  border: 2px solid black;
  padding: 5px;
  height: 30px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: black;
  &:focus {
    color: black;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 70px;
  @media (max-width: 700px) {
    margin-top: 100px;
    margin-bottom: 0px;
  }
`;

const Form = styled.form`
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  width: 30px;
  border-radius: 0 5px 5px 0;
`;

const mapStateToProps = ({ productsState: { searchValue } }) => {
  return {
    searchValue: searchValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearch: (e) =>
      dispatch({ type: SET_SEARCH_VALUE, payload: { value: e.target.value } }),
    setSearchProducts: () => dispatch({ type: SET_SEARCH_PRODUCTS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
