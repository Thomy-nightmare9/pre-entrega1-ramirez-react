import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
    return (
        <div className="item-detail card mb-3">
            <div className="row g-0">
            <div className="col-md-4">
                <img src={producto.imagen} className="img-fluid rounded-start" alt="" />
            </div>
            <div className="card-body detail">
                <h2 className="card-title">{producto.nombre}</h2>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text"><small className="text-body-secondary">Precio: ${producto.precio}</small></p>
            </div>
            </div>
        </div>
    );
};

export default ItemDetail