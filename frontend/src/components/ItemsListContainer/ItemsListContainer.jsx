import { useContext } from "react"
import { dataContext } from "../../Context/Context"
import ItemsList from "../ItemsList/ItemsList"
import './ItemsListContainer.css'

const ItemsListContainer = () => {
  const {product} = useContext(dataContext)
  return (
    <div className="itemsContainer">
      {product.map((prod)=>(
        <ItemsList product={prod} key={prod._id}/>
      ))}
    </div>
  )
}

export default ItemsListContainer