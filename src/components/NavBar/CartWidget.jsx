import { useContext } from "react";
import { ImCart } from "react-icons/im";
import {Link} from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import "./NavBar.css"

const CartWidget = () => {
    const{cantidadTotal} = useContext(CartContext)

    let cantidad = cantidadTotal()

    return (
        <Link to="/carrito" className="cart">
            <ImCart size={30} color="#FFFFFF" />
            <p>{cantidad > 0 && cantidad}</p>
        </Link>
    )
}

export default CartWidget