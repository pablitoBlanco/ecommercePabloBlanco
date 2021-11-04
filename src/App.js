import "./components/NavBar/NavBar.css"
import "./components/ItemListContainer/ItemListContainer.css"
import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"


function App() {

  return (

    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/">
           <ItemListContainer />
         </Route>
         <Route path="/item">
           <ItemDetailContainer/>
         </Route>
       </Switch>
    </BrowserRouter>


  );
}

export default App;
