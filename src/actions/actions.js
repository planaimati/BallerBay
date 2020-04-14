export const SCROLL = "SCROLL";
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const SET_LOADING = "SET_LOADING";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCTS_INFO = "SET_PRODUCTS_INFO";
export const SET_DELIVERY_INFO = "SET_DELIVERY_INFO";
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_SEARCH_PRODUCTS = "SET_SEARCH_PRODUCTS";
export const GET_TOTAL = "GET_TOTAL";

export const deleteItem = (id) => {
  return {
    type: "DELETE",
    payload: { id },
  };
};

export const getProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: { products },
  };
};
