import "./Home.scss";
import { NavBar } from "../../components/NavBar/navBar";
import { ItemListContainer } from "..//ItemListContainer/itemListContainer";
import { ItemDetailContainer } from "../ItemDetailContainer/itemDetailContainer";
import { FinalizarCompra } from "../../components/FinalizarCompra/finalizarCompra";
import { Cart } from "../../components/Cart/cart";
import { CheckOut } from "../../components/CheckOut/checkOut";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Home = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/categories/:id">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/finalizar-compra">
          <FinalizarCompra />
        </Route>
        <Route exact path="/checkout">
          <CheckOut />
        </Route>
      </Switch>
    </Router>
  );
};
