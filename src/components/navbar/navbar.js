import { Link } from "react-router-dom";
import { Cartwidget } from "./cartwidget/CartWidget.js";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <header className="navbar_container">

      <div className="logo">

      <Link to="/"><img src=".././imgs/cup-hot.svg" alt="Logo taza" /></Link>

        <h1>Cerámicas Lorem</h1>
      </div>

      <nav className="navbar">
        
        <ul>
    
          <Link to="/productos/tazas">    <li>Tazas</li>     </Link>
          
          <Link to="/productos/platos">    <li>Platos</li>    </Link>

          <Link to="/productos/cuencos">    <li>Cuencos</li>     </Link>

        </ul>

        <Cartwidget/>

      </nav>
    </header>
  );
};
