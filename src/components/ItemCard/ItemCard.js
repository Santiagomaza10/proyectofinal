import { Link } from "react-router-dom";
import "./itemcard.scss"

export const ItemCard = ({ item }) => {
  return (
    <div className="itemcard">
      <h2> {item.name} </h2>
      <img src={item.img} alt={item.name} />
      <p> {item.description} </p>
      <p>$ {item.price} </p>

      {item.stock === 0 ? (
        <p><strong>No hay stock del producto</strong></p>
      ) : (
        <Link to={`/detail/${item.id}`} className="btn btn-primary">
          Ver más
        </Link>
      )}
    </div>
  );
};
