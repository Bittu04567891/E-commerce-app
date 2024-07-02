import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./components/Success";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./scrollToTop";
import { createGlobalStyle } from "styled-components";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
    color: inherit;
  }
`;
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>

        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
