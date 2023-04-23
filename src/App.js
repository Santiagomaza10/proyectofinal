import { Navbar } from "./components/navbar/navbar";
import { Itemlistcontainer } from "./components/itemlistcontainer/itemlistcontainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/navbar/navbar.scss";
import { CartProvider } from "./Context/CartContext";
import Cart from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Itemlistcontainer />} />
          <Route path="/productos/:categoryId" element={<Itemlistcontainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={ <Cart/> }/>
          <Route path="/checkout" element={ <Checkout/> } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
