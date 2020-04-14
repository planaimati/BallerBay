import {
  ADD_ITEM_TO_CART,
  //SET_LOADING,
  SET_SEARCH_VALUE,
  SET_PRODUCTS,
  SET_PRODUCTS_INFO,
  SET_DELIVERY_INFO,
  SET_SEARCH_PRODUCTS,
  GET_TOTAL,
} from "../actions/actions";
//import { items } from "../productData";

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
  //wyszukiwanie

  searchValue: "",
  category: "all",
  price: 0,
  maxPrice: 0,
  minPrice: 0,
};

export default function reducer(state = defaultState, action) {
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

  if (action.type === ADD_ITEM_TO_CART) {
    let cartItems = state.products.find((item) => {
      return item.id === action.payload.id;
    });

    let addedItems = state.cart.find((item) => item.id === action.payload.id);

    if (addedItems) {
      return {
        ...state,
      };
    }

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

  if (action.type === SET_PRODUCTS_INFO) {
    return {
      ...state,
      productInfo: !state.productInfo,
    };
  }

  if (action.type === SET_DELIVERY_INFO) {
    return {
      ...state,
      deliveryInfo: !state.deliveryInfo,
    };
  }

  if (action.type === SET_SEARCH_VALUE) {
    return {
      ...state,
      searchValue: action.payload.value,
    };
  }

  if (action.type === SET_SEARCH_PRODUCTS) {
    const results = state.productList.filter((item) => {
      return item.title.toLowerCase().includes(state.searchValue);
    });

    return {
      ...state,
      products: results,
    };
  }

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
