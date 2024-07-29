import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import "./Carrito.css";

const Carrito = () => {

    const { carrito, borrarProductoPorId, vaciarCarrito, precioTotal } = useContext(CartContext)

    if(carrito.length === 0){
        return(
            <div className="cart-empty">
                <h2>El carrito está vacío 😟</h2>
                <Link className="btn" to="/">Ver productos</Link>
            </div>
        )
    }

    return (
        <div>
            <h2>¡Tu carrito te está esperando! 🛒</h2>
            {
                carrito.map((productoCarrito) => (
                    <div style={{ display: "flex", justifyContent: "space-around", margin: "50px 0" }} key={productoCarrito.id}>
                        <img src={productoCarrito.imagen} width={100} alt="" />
                        <p>{productoCarrito.nombre}</p>
                        <p>precio c/u: ${productoCarrito.precio}</p>
                        <p>cantidad: {productoCarrito.cantidad}</p>
                        <p>total parcial: {productoCarrito.precio * productoCarrito.cantidad}</p>

                        <button className="btn" onClick={() => borrarProductoPorId(productoCarrito.id)}>Eliminar</button>
                    </div>
                ))
            }
            <p>Precio Total: {precioTotal()}</p>
            <button className="btn" onClick={vaciarCarrito}>Vaciar carrito</button>
            <Link className="btn" to="/checkout">Continuar con la compra</Link>
        </div>
    )
}
export default Carrito