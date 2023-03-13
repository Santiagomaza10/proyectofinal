import { ItemCard } from "../ItemCard/ItemCard";
import "./itemlist.scss";

export const ItemList = ({ items }) => {
  return (
    <div className="itemList">
      <h2>Productos</h2>
      <hr />

      <div className="list">
        {items.map((producto) => (
          <ItemCard key={producto.id} item={producto} />
        ))}
      </div>
    </div>
  );
};
