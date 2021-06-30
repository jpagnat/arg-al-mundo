import './Home.scss'
import { NavBar } from '../../components/NavBar/navBar'
import { ItemListContainer } from '..//ItemListContainer/itemListContainer'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export const Home = () => {


  return (

    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path='/categories/:id'>
          <ItemListContainer />
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </Router>

  );
}

