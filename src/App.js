import "./components/NavBar.css"
import "./components/ItemListContainer.css"
import './App.css';
import {NavBar} from "./components/NavBar"
import {ItemListContainer} from "./components/ItemListContainer"


function App() {
  return (

    <>
    <NavBar/>
    <ItemListContainer text="Bienvenido"/>
    </>

  );
}

export default App;
