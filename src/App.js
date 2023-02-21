import { Navbar } from "./components/navbar/navbar";
import "./components/navbar/navbar.scss"
import { Itemlistcontainer } from "./components/itemlistcontainer/itemlistcontainer"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Itemlistcontainer nombre= "Cerámicas Lorem" direccion= "Av. del libertador 2154" mail= "contacto@ceramicaslorem.com"/>

    </div>
  );
}

export default App;
