import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import useLoading from "../../hooks/useLoading.jsx";
import Loading from "../Carga/Loading.jsx";
import db from "../../db/db.js";

import "./ItemListContainer.css"

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);

    const { isLoading, showLoading, hideLoading } = useLoading()

    const { idCategoria } = useParams()

    const obtenerProductos = () => {
        const productosRef = collection(db, "productos");
        getDocs(productosRef).then((respuesta) => {
            const data = respuesta.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() };
            });

            setProductos(data);
        });
    };

    const obtenerProductosFiltrados = () => {
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where("categoria", "==", idCategoria));
        getDocs(q).then((respuesta) => {
            const data = respuesta.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() };
            });

            setProductos(data);
        });
    };

    useEffect(() => {
        if (idCategoria) {
            showLoading()
            obtenerProductosFiltrados()
        } else {
            showLoading()
            obtenerProductos()
        }
        hideLoading();
    }, [idCategoria]);

    return (
        <div>
            <div className="itemlistcontainer">
                <p>{saludo}</p>
                {isLoading ? <Loading /> : <ItemList productos={productos} />}
            </div>
        </div>
    );
};
export default ItemListContainer;
