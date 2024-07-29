import { Link } from "react-router-dom";

import './Error.css';

const Error = () => {
    return (
        <div className="error-container">
            <h1>ERROR 404</h1>
            <p>La página que buscas no está disponible</p>
            <Link className="btn" to="/">Volver al inicio</Link>
        </div>
    )
}
export default Error