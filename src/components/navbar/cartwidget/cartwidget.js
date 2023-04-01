import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import "./cart.scss"


export const Cartwidget = () => {

    const { totalCart } = useContext (CartContext)


    return (
        <Link to="/cart" className="cart">
            <FaShoppingCart />
            <span> {totalCart()} </span>
        </Link>
    );
};