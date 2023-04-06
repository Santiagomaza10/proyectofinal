import { Link } from "react-router-dom";
import { CartWidget } from "./cartwidget/CartWidget"
import { BsFire } from "react-icons/bs";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <header className="navbar_container">

      <div className="logo">

      <Link to="/" className="logo"><BsFire /></Link>

      <Link to="/" className="title"><h1>Lorem - Piedras energéticas</h1></Link>
      </div>

      <nav className="navbar">
        
        <ul>
    
          <Link to="/productos/colgantes">    <li>Colgantes</li>     </Link>
          
          <Link to="/productos/pulseras">    <li>Pulseras</li>    </Link>

          <Link to="/productos/piedras">    <li>Piedras</li>     </Link>

        </ul>

        <CartWidget></CartWidget>

      </nav>
      
    </header>
  );
};
