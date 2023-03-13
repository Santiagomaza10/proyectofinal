
import { ItemCounter } from "../ItemCounter/ItemCounter";
import "./itemdetail.scss";

export const ItemDetail = ({ item }) => {
  return (
    <div className="itemdetail">
      <h2> {item.name} </h2>
      <img src={item.img} alt={item.name} />
      <p> {item.description} </p>
      <p>$ {item.price} </p>

      <ItemCounter />
    </div>
  );
};
