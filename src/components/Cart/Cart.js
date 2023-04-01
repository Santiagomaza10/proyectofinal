import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import { BsTrash } from "react-icons/bs"

export const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (

                    <div key={item.id}>
                        <h2> {item.name} </h2>
                        <img src={item.img} alt={item.name} />
                        <p>Precio unitario: {item.price}</p>
                        <p> Cantidad: {item.counter} </p>

                        <p>Total $ {item.price * item.counter} </p>
                        <button onClick={() => eliminarDelCarrito(item.id)} className="btn btn-outline-danger"><BsTrash/></button>
                        <hr/>
                    </div>
                    

                ))

            }

            <h2>Total compra: $ {totalCompra()}</h2>
            <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar carrito</button>
        </div>
    )
}

export default Cart