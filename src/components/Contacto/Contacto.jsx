import "./Contacto.css"


const Contacto = () => {
    return (
        <div>
            <h2>Bienvenido!</h2>
            <form className="form-contact">
            <label>Nombre</label>
            <input
                type="text"
                name="nombre"
            />
            <label>Telefono</label>
            <input
                type="text"
                name="telefono"
            />
            <label>Email</label>
            <input
                type="text"
                name="email"
            />
            <button className="send-order" type="submit">
                Registrarse
            </button>
            </form>
        </div>
    )
}
export default Contacto