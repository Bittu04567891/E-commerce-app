import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Success from "./components/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Switch>
      <Route exact path="/E-commerce-app/">
        <Home />
      </Route>
      <Route path="/E-commerce-app/products/:category">
        <ProductList />
      </Route>
      <Route path="/E-commerce-app/product/:id">
        <Product />
      </Route>
      <Route path="/E-commerce-app/cart">
        <Cart />
      </Route>
      <Route path="/E-commerce-app/success">
        <Success />
      </Route>
      <Route path="/E-commerce-app/login">
        {user ? <Redirect to="/E-commerce-app" /> : <Login />}
        <Login />
      </Route>
      <Route path="/E-commerce-app/register">
        {user ? <Redirect to="/E-commerce-app" /> : <Register />}
        <Register />
      </Route>
    </Switch>
  );
};
export default App;
