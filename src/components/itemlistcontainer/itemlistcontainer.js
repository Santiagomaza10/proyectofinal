import { useEffect, useState } from "react";
import "./itemlistcontainer.scss";
import { pedirDatos } from "../../helpers/pedirDatos.js";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const Itemlistcontainer = ({ nombre, direccion, mail }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams ();


  useEffect(() => {

    setLoading (true)

    pedirDatos()
      .then((response) => {

        !categoryId ? setProductos (response) : setProductos (response.filter((prod) => prod.category === categoryId))

      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
      
  }, [categoryId]);

  return (
    <div className="itemlistcontainer">


      {loading ? <h2>Cargando...</h2> : <ItemList items={productos} />}
    </div>
  );
};
