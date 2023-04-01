import { ItemCounter } from "../ItemCounter/ItemCounter";
import { Link, useNavigate } from "react-router-dom";
import "./itemdetail.scss";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({ item }) => {
  const { addCart, isInCart } = useContext(CartContext);


  const [counter, setCounter] = useState(1);

  const navigate = useNavigate();

  const handlerVolver = () => {
    navigate(-1);
  };

  const handleAgregar = () => {
    const newItem = {
      ...item,
      counter
    };

    addCart(newItem);
  };

  return (
    <div className="itemdetail">
      <h2> {item.name} </h2>
      <img src={item.img} alt={item.name} />
      <p> {item.description} </p>
      <p>$ {item.price} </p>



      {
        isInCart(item.id) 
            ? <Link to="/cart" className="btn btn-success"> Finalizar compra </Link>
            : <ItemCounter
            max={item.stock}
            counter={counter}
            setCounter={setCounter}
            handleAgregar={handleAgregar}
          />
      }

      <button onClick={handlerVolver} className="btn btn-primary mx-2">
        Volver
      </button>
    </div>
  );
};
