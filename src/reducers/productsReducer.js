//import akcji

import {
  ADD_ITEM_TO_CART,
  SET_SEARCH_VALUE,
  SET_PRODUCTS,
  SET_SEARCH_PRODUCTS,
  GET_TOTAL,
} from "../actions/actions";

//stan aplikacji
const defaultState = {
  products: [],
  productList: [],
  cartProducts: 0,
  cart: [],
  total: 0,
  loading: true,
  singleProduct: {},
  productInfo: false,
  deliveryInfo: false,
  favorites: [],
  //wyszukiwanie

  searchValue: "",
};

export default function reducer(state = defaultState, action) {
  //usuwanie przedmiotów z koszyka

  if (action.type === "DELETE") {
    let deletedItems = state.cart.filter((item) => {
      return item.id !== action.payload.id;
    });

    return {
      ...state,
      cart: deletedItems,
      cartProducts: state.cartProducts - 1,
    };
  }
  // dodawanie przedmiotów do koszyka
  if (action.type === ADD_ITEM_TO_CART) {
    let cartItems = state.products.find((item) => {
      return item.id === action.payload.id;
    });
    //sprawdzenie czy produkt został już dodany do koszyka
    let addedItems = state.cart.find((item) => item.id === action.payload.id);

    if (addedItems) {
      return {
        ...state,
      };
    }
    //sprawdzenie czy produkt jest dostępny
    if (cartItems.avilable !== true) {
      return {
        ...state,
      };
    }

    return {
      ...state,
      cart: [...state.cart, cartItems],
      cartProducts: state.cartProducts + 1,
    };
  }

  //przypisanie danych pobranych z API do tablicy

  if (action.type === SET_PRODUCTS) {
    let importedItems = action.payload.products.map((item) => {
      let id = item.sys.id;
      let title = item.fields.title;
      let price = item.fields.price;
      let desc = item.fields.desc;
      let amount = item.fields.amount;
      let designer = item.fields.designer;
      let size = item.fields.size;
      let avilable = item.fields.avilable;
      let color = item.fields.color;
      let image = item.fields.img.fields.file.url;
      let delivery = item.fields.delivery;

      return {
        id,
        title,
        price,
        desc,
        amount,
        designer,
        size,
        avilable,
        color,
        image,
        delivery,
      };
    });

    return {
      ...state,
      products: importedItems,
      productList: importedItems,
    };
  }

  //input wyszukiwarki

  if (action.type === SET_SEARCH_VALUE) {
    return {
      ...state,
      searchValue: action.payload.value,
    };
  }

  //wyszukwiarka

  if (action.type === SET_SEARCH_PRODUCTS) {
    const results = state.productList.filter((item) => {
      return item.title.toLowerCase().includes(state.searchValue);
    });

    return {
      ...state,
      products: results,
    };
  }

  // liczenie łącznej kwoty za zakupy

  if (action.type === GET_TOTAL) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );

    total = parseFloat(total.toFixed(2));

    return {
      ...state,
      total,
      amount,
    };
  }

  return state;
}
