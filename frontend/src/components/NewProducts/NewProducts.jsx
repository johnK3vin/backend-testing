import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { getCookiesByName } from "../../utils/FormsUtils"
import './NewProducts.css'
const NewProducts = () => {
    const formRef = useRef(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current) //tranformo un html en un objeto iterator
        const data = Object.fromEntries(datForm)
        const token = getCookiesByName('jwtCookie')
        const response = await fetch("http://localhost:8080/api/products", {
            method: 'POST',
            headers: {
                'Authorization': `${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (response.status == 200) {
            const datos = await response.json()
            console.log("producto creado con exito: " + datos)
        } else {
            const datos = await response.json()
            console.log(datos)
        }
    }
  return (
    <div className="registerContainer">
      <form id="formRegister" onSubmit={handleSubmit} ref={formRef}>
        <h2>Crear nuevo producto</h2>
        <div className="div-form">
          <label htmlFor="title">Titulo:</label>
          <input type="text" className="formInput" id="title" placeholder="Ingrese el nombre del producto" name="title" required autoComplete="current-title" />
        </div>
        <div className="div-form">
          <label htmlFor="description">Descripcion:</label>
          <input type="text" className="formInput" id="description" placeholder="Ingrese la descripcion del producto" name="description" required autoComplete="current-description" />
        </div>
        <div className="div-form">
          <label htmlFor="price">Precio:</label>
          <input type="number" className="formInput" id="price" placeholder="Ingrese el precio del producto" name="price" required autoComplete="current-price" />
        </div>
        <div className="div-form">
          <label htmlFor="stock">Stock:</label>
          <input type="number" className="formInput" id="stock" placeholder="Ingrese el Stock del producto" name="stock" required autoComplete="current-stock" />
        </div>
        <div className="div-form">
          <label htmlFor="category">Categoria:</label>
          <input type="text" className="formInput" id="category" placeholder="Ingrese la categoria del producto" name="category" required autoComplete="current-category" />
        </div>
        <div className="div-form">
          <label htmlFor="code">Codigo:</label>
          <input type="text" className="formInput" id="code" placeholder="Ingrese el codigo del producto" name="code" required autoComplete="current-code" />
        </div>
        <button type="submit" className="registerButton">Generar nuevo producto</button>
      </form>
    </div>
  )
}

export default NewProducts