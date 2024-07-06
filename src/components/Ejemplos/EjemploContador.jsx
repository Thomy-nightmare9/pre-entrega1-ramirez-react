import { useState, useEffect } from "react";
import Contador from "./Contador";


const EjemploContador = ({ stock }) => {
    const [contador, setContador] = useState(1);
    const [toggle, setToggle] = useState(true)
    
    useEffect (() => {
        
    },[])


    const aumentarContador = () => {
        //contador = contador + 1
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const disminuirContador = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    const cambiarValorToggle = () => {
        setToggle( !toggle )  
    }

    return (
        <div>
            <Contador
                contador={contador}
                aumentarContador={aumentarContador}
                disminuirContador={disminuirContador}
            />
            <p> Booleano: {toggle.toString()}</p>
            <button onClick={cambiarValorToggle}>Cambiar balor toggle</button>
        </div>
    );
};
export default EjemploContador;