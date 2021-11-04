
import { CartWidget } from "../CartWidget/CartWidget"
import { /* BrowserRouter, Switch, Route, */ NavLink } from "react-router-dom"

export const NavBar = () => {

  return(
  <div className="menu">
    <div className="holder">
     <NavLink to="/" activeStyle={{textDecoration: "none", color:"lightblue"}}><p className="falsoLogo">Hexagon Discos</p></NavLink>
      <nav>
        <ul className="lista">
          <li><NavLink to="/caregory/metal">Metal</NavLink></li>
            <li><NavLink to="/caregory/drum and bass">D&B</NavLink></li>
            <li><NavLink to="/caregory/jazz">Jazz</NavLink></li>
            <li><NavLink to="/caregory/electronica">Electronica</NavLink></li>
          <li><CartWidget/></li>
        </ul>
      </nav>
    </div>
  </div>
  )
}