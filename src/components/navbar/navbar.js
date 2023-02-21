export const Navbar = () => {
  return (
    <header className="navbar_container">

      <div className="logo">
        <img src="./imgs/cup-hot.svg" />
        <h1>Cerámicas Lorem</h1>
      </div>

      <nav className="navbar">
        
        <ul>
          <a href="#">
            <li>Nosotros</li>
          </a>
          <a href="#">
            <li>Productos</li>
          </a>
          <a href="#">
            <li>Contacto</li>
          </a>
        </ul>

        <div className="cart">
          <p>0</p>
          <img src="./imgs/cart4.svg" alt="carrito" />
        </div>



      </nav>
    </header>
  );
};
