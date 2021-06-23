import './App.scss'
import { NavBar } from './components/NavBar/navBar'
import { ItemListContainer } from './components/ItemListContainer/itemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Argentina al mundo!</h1>

      <ItemListContainer />
    </div>
  );
}

export default App;
