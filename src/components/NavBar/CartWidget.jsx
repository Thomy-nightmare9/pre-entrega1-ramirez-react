import { ImCart } from "react-icons/im";
import "./NavBar.css"

const CartWidget = () => {
    return (
        <div className="cart">
            <ImCart size={30} color="#FFFFFF" />
            <p>1</p>
        </div>
    )
}

export default CartWidget