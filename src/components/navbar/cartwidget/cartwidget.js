import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import "./cart.scss"


export const CartWidget = () => {

    const { cart, totalCart } = useContext (CartContext)


    return (
        <Link to="/cart" className={`${cart.length > 0 ? "cart-widget-active" : "cart-widget-disabled"}`}>
            <FaShoppingCart />
            <span> {totalCart()} </span>
        </Link>
    );
};