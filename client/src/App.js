import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  const user = true;
  return (
    <Router>
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
        <Route path="/E-commerce-app/login">
          {user ? <Redirect to="/E-commerce-app" /> : <Login />}
          <Login />
        </Route>
        <Route path="/E-commerce-app/register">
          {user ? <Redirect to="/E-commerce-app" /> : <Register />}
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
