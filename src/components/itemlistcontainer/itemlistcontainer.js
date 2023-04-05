import { useEffect, useState } from "react";
import "./itemlistcontainer.scss";
import { pedirDatos } from "../../helpers/pedirDatos.js";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const Itemlistcontainer = ({ nombre, direccion, mail }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const q = categoryId
                ?  query(productosRef, where("category", "==", categoryId))
                : productosRef
    

    getDocs(q)
    
    .then((res) => {
      const docs = res.docs.map ((doc) => {
        return {...doc.data (), id:doc.id}
      });

      setProductos(docs)

    })

    .finally (() => {
      setLoading(false)
    })
  }, [categoryId]);

  return (
    <div className="itemlistcontainer">
      {loading ? <h2>Cargando...</h2> : <ItemList items={productos} />}
    </div>
  );
};
