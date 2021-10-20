import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
  return(
  <div className="menu">
    <div className="holder">
      <p className="falsoLogo">Hexagon Discos</p>
      <nav>
        <ul className="lista">
          <li>inicio</li>
          <li>generos</li>
          <li>contacto</li>
          <li><CartWidget/></li>
        </ul>
      </nav>
    </div>
  </div>
  )
}