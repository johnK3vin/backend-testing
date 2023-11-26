import { useEffect , useContext, useState} from 'react';
import {dataContext} from '../../Context/Context'
import Loader from '../Loader/Loader'
import './cart.css'
const Cart = () => {
  const {user} = useContext(dataContext)
  const [carrito, setCarrito] = useState([])
  const [load, setLoad ] = useState(false)

  useEffect(()=>{
    setLoad(!load)
    setTimeout(()=>{
      setLoad(!load)
    }, 3000)

    const fetchData = async () =>{
      try {
        if (!user || !user.cart) {
          console.warn("Usuario o carrito no definido");
          return;
        }

        const response = await fetch(`http://localhost:8080/api/carts/${user.cart}`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error("Error al extraer carrito");
        }
        
        const data = await response.json();
        setCarrito(data.mensaje.products);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData()
  },[user])


  return load ? (
    <Loader/>
  ) : ( 
    <div className="carrito-container">
      <h2>Mi Carrito</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={styles.celda}>Nombre</th>
            <th style={styles.celda}>Cantidad</th>
            <th style={styles.celda}>Precio</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((prod, key)=>(
            <tr key={key}>
              <td style={styles.celda}>{prod.id_prod.title}</td>
              <td style={styles.celda}>{prod.quantity}</td>
              <td style={styles.celda}>{prod.id_prod.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const styles = {
    celda: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
    },
};

export default Cart