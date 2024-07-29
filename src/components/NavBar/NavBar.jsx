import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";
import "./NavBar.css";
import logoZonaTimbos from "../../img/logo-zona-timbos.png";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logoZonaTimbos} width={90} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/categoria/nike">NIKE</Link></li>
                                <li><Link className="dropdown-item" to="/categoria/adidas">ADIDAS</Link></li>
                                <li><Link className="dropdown-item" to="/categoria/new balance">NEW BALANCE</Link></li>
                                <li><Link className="dropdown-item" to="/categoria/puma">PUMA</Link></li>
                                <a><hr className="dropdown-divider"/></a>
                                <li><Link className="dropdown-item" to="/">Todos</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
