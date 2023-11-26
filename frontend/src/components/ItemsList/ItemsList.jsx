import { useContext } from 'react'
import { dataContext } from '../../Context/Context'
import './ItemsList.css'
const ItemsList = ({product}) => {
  const {user} = useContext(dataContext)

  const pushCart = async (pid, cantidad) => {
    try{
      const response = await fetch(`http://localhost:8080/api/carts/${user.cart}/products/${pid}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          quantity: cantidad, 
        }),
      })
      if(!response.ok){
        return console.log("error al agregar carrito")
      }
      console.log("producto agregado a carrito")
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="items-container">
        <div className="items-img">
            <img src='' alt="imagen del producto" />
        </div>
        <div className="items-title">
            <p>{product.title}</p>
            <p>${product.price}</p>
        </div>
        <div className="items-button">
          <button onClick={() => pushCart(product._id, 1)}>agregar a carrito</button>
        </div>
    </div>
  )
}

export default ItemsList