import { obtenerProductos } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import useLoading from "../../hooks/useLoading.jsx";
import Loading from "../Ejemplos/Loading.jsx";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css"

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);

    const { isLoading, showLoading, hideLoading } = useLoading()

    const { idCategoria } = useParams()

    useEffect(() => {
        showLoading()

        obtenerProductos()
            .then((respuesta) => {
                if (idCategoria){
                    const productosFiltrados = respuesta.filter((producto) => producto.categoria === idCategoria)
                    setProductos(productosFiltrados)
                }else{
                    setProductos(respuesta);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                hideLoading()
                console.log("finalizo la promesa")
            });
    }, [idCategoria]);

    return (
        <div>
            <div className="itemlistcontainer">
                <p>{saludo}</p>
                {isLoading ? <Loading/> : <ItemList productos={productos}/>}
            </div>
        </div>
    );
};
export default ItemListContainer;