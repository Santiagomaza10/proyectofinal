import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Navigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, addDoc, writeBatch, query, where, documentId } from "firebase/firestore";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validaciones (revisar con formik en ultima clase)

    const orden = {
      cliente: values,
      items: cart.map((prod) => ({
        id: prod.id,
        price: prod.price,
        cantidad: prod.counter,
        name: prod.name,
      })),
      total: totalCompra(),
      fecha: new Date(),
    };

    const batch = writeBatch(db)


    const ordersRef = collection(db, "orders");
    const productosRef = collection(db, "productos")
    
    console.log(cart.map(prod => prod.id))

    /* const itemsRef = query (productosRef, where(documentId(), "in", cart.map(prod => prod.id ) ) ) */









    addDoc(ordersRef, orden).then((doc) => {
      setOrderId(doc.id);
      vaciarCarrito();
    });



  };

  if (orderId) {
    return (
      <div className="container my-5">
        <h2>Tu orden se registró con éxito !</h2>
        <hr />
        <p>
          Tu numero de orden es <strong>{orderId}</strong>
        </p>
        <Link className="btn btn-primary" to="/">
          Volver al inicio
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={values.nombre}
          type={"text"}
          placeholder={"Nombre y apellido"}
          className="form-control my-2"
          name="nombre"
        />

        <input
          onChange={handleInputChange}
          value={values.direccion}
          type={"text"}
          placeholder={"Direccion"}
          className="form-control my-2"
          name="direccion"
        />

        <input
          onChange={handleInputChange}
          value={values.email}
          type={"email"}
          placeholder={"E-mail"}
          className="form-control my-2"
          name="email"
        />

        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
