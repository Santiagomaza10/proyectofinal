import { Navbar } from "./components/navbar/navbar";
import "./components/navbar/navbar.scss";
import { Itemlistcontainer } from "./components/itemlistcontainer/itemlistcontainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>



      <Navbar />

        <Routes>

          <Route path="/" element= { <Itemlistcontainer /> } />

          <Route path="/productos/:categoryId" element= { <Itemlistcontainer /> } />

          <Route path="/detail/:itemId" element= { <ItemDetailContainer /> } />

          <Route path="*" element= { <Navigate to="/" /> } />

        </Routes>

      



    </BrowserRouter>
  );
}

export default App;
