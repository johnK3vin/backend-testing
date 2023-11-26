import ItemsListContainer from "../ItemsListContainer/ItemsListContainer"
import { useState, useEffect } from "react"
import Loader from '../Loader/Loader';
const Home = () => {
  const [load, setLoad ] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setLoad(!load)
    }, 1000)
  },[])

  return load ? (
    <div className="home-container">
        <ItemsListContainer/>
    </div>
  ) : (
    <Loader/>
  )
}

export default Home