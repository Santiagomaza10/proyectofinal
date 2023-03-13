import { useEffect, useState } from "react";
import "./itemlistcontainer.scss";
import { pedirDatos } from "../../helpers/pedirDatos.js";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const Itemlistcontainer = ({ nombre, direccion, mail }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams ();

  console.log(categoryId)

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
{/*       <h2 className="ilc-title">Bienvenidos a {nombre} !</h2>
      <hr />
      <p className="ilc-text">
        {" "}
        Cada colección evoca un sentimiento e implica una técnica diferente.
        Equipá todo tu hogar con una misma impronta de diseño. <br /> Podes
        escribirnos a {mail} o encontrarnos en {direccion}.{" "}
      </p>

      <hr /> */}

      {loading ? <h2>Cargando...</h2> : <ItemList items={productos} />}
    </div>
  );
};
