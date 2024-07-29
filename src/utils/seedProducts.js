import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const productos = [
    {
        id: "nikblk",
        nombre: "Botines nike mercurial vapor 15",
        descripcion: "Diseñados para velocidad, estos botines tienen un exterior sintético ligero y una suela que maximiza la tracción en césped natural y artificial, permitiendo rápidos cambios de dirección.",
        stock: 5,
        categoria: "nike",
        imagen: "../public/nike-negros.jpg",
        precio: 198000
    },
    {
        id: "addblk",
        nombre: "Botines adidas predator accuracy",
        descripcion: "Los Adidas Predator Accuracy son botines de fútbol diseñados para precisión y control. Cuentan con un exterior sintético texturizado y la tecnología DEMONSCALE para mejor adherencia y precisión en tiros y pases. Su diseño ajustado y suela de tracción los hacen ideales para superficies de césped natural y artificial.",
        stock: 5,
        categoria: "adidas",
        imagen: "../public/adidas-negros.jpg",
        precio: 190000
    },
    {
        id: "newblk",
        nombre: "Botines new balance furon v6 elite",
        descripcion: "Ideales para jugadores ofensivos, estos botines ofrecen un ajuste ceñido y un exterior ligero, optimizando la velocidad y la precisión en el campo.",
        stock: 5,
        categoria: "new balance",
        imagen: "../public/new-balance-negros.jpg",
        precio: 190000
    },
    {
        id: "pumblk",
        nombre: "Botines puma future ultimate elite",
        descripcion: "Con una estructura adaptable y tecnología de ajuste NETFIT, estos botines proporcionan flexibilidad y control, ajustándose a diferentes formas de pie.",
        stock: 5,
        categoria: "puma",
        imagen: "../public/puma-negros.jpg",
        precio: 195000
    },
    {
        id: "nikred",
        nombre: "Botines nike tempo legend 9 elite",
        descripcion: "Confeccionados en cuero de canguro, ofrecen comodidad y un toque superior del balón, ideales para jugadores que priorizan el control y la durabilidad.",
        stock: 10,
        categoria: "nike",
        imagen: "../public/nike-rojos.jpg",
        precio: 190000
    },
    {
        id: "addred",
        nombre: "Botines adidas x crazyfast elite",
        descripcion: "Diseñados para explosividad y velocidad, estos botines cuentan con una estructura ligera y una suela que proporciona excelente tracción en superficies de césped natural.",
        stock: 10,
        categoria: "adidas",
        imagen: "../public/adidas-rojos.jpg",
        precio: 230000
    },
    {
        id: "newred",
        nombre: "Botines new balance furon elite",
        descripcion: "Estos botines están hechos para jugadores rápidos, con un exterior minimalista y ligero que facilita movimientos ágiles y precisos en el campo.",
        stock: 10,
        categoria: "new balance",
        imagen: "../public/new-balance-rojos.jpg",
        precio: 198000
    },
    {
        id: "pumred",
        nombre: "Botines puma future ultimate elite",
        descripcion: "Ofrecen un ajuste personalizado y excelente control del balón gracias a su tecnología de ajuste NETFIT y exterior texturizado.",
        stock: 10,
        categoria: "puma",
        imagen: "../public/pumas-rojos.jpg",
        precio: 195000
    },
    {
        id: "nikblu",
        nombre: "Botines nike panthon gx elite 9",
        descripcion: "Ideales para jugadores creativos, estos botines cuentan con una zona de golpeo ampliada y tecnología de agarre para mejorar la precisión y el control del balón.",
        stock: 2,
        categoria: "nike",
        imagen: "../public/nike-azules.jpg",
        precio: 270000
    },
    {
        id: "addblu",
        nombre: "Botines adidas 11 pro Tony Kroos",
        descripcion: "Famosos por su comodidad y ajuste en cuero, estos botines ofrecen un control preciso y un toque superior, ideales para jugadores que buscan fiabilidad.",
        stock: 2,
        categoria: "adidas",
        imagen: "../public/adidas-azules.jpg",
        precio: 220000
    },
    {
        id: "newblu",
        nombre: "Botines new balance furon v6 elite",
        descripcion: "Diseñados para maximizar la velocidad y precisión, estos botines tienen un exterior ligero y ceñido, perfectos para jugadores ofensivos.",
        stock: 2,
        categoria: "new balance",
        imagen: "../public/new-balance-azules.jpg",
        precio: 168000
    },
    {
        id: "pumblu",
        nombre: "Botines puma future ultimate elite",
        descripcion: "Estos botines ofrecen un ajuste adaptable y gran control del balón, gracias a su estructura avanzada y tecnología de ajuste NETFIT.",
        stock: 2,
        categoria: "puma",
        imagen: "../public/puma-azules.jpg",
        precio: 195000
    }
]

const seedProducts = () => {
    productos.map(({id, ...rest}) => {
        const productosRef = collection(db, "productos")
        addDoc( productosRef, rest )
    });
    return
}

seedProducts()