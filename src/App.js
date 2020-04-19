import React from "react";
//import { client } from "./API/contentful";
// import theme providera oraz styled-components
import Theme from "./Theme/Theme";
import GlobalStyle from "./Theme/GlobalStyle";
// import stron
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import Default from "./pages/Default";
import ProductPage from "./pages/ProductPage";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";
//import komponentów
import Navbar from "./components/Navbar/Navbar";
// react router import
import { Route, Switch } from "react-router-dom";
/// API
import { client } from "./API/contentful";
import { connect } from "react-redux";
import { getProducts } from "./actions/actions";

function App({ setProducts }) {
  //przy każdym renderowaniu całej aplikacji pobierane są dane o produktach z API
  React.useEffect(() => {
    client
      .getEntries({
        content_type: "sklepBallerBay",
      })
      .then((response) => setProducts(response.items))
      .catch(console.error);

    return () => {};
  }, [setProducts]);
  // poniżej został skonfigurowany react router i jego ścieżki oraz GlobalStyle i Theme provider
  return (
    <Theme>
      <GlobalStyle />
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route exact path="/productpage" component={ProductPage}></Route>
        <Route path="/productpage/:id" component={SingleProduct}></Route>
        <Route path="/cart" component={CartPage}></Route>
        <Route path="/checkout" component={CheckoutPage}></Route>
        <Route component={Default}></Route>
      </Switch>
    </Theme>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) => dispatch(getProducts(products)),
  };
};

export default connect(null, mapDispatchToProps)(App);
