import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <div className="item row row-cols-1 row-cols-md-2 g-3">
            <div className="col">
                <div className="card">
                    <img src={producto.imagen} className="card-img-top" width={200} alt="" />
                    <div className="card-body">
                        <p className="card-title">{producto.nombre}</p>
                        <p className="card-text">Precio: ${producto.precio}</p>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <Link to={"/detalle/" + producto.id} className="btn btn-outline-primary" type="button">Ver detalles</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Item;




