import { useEffect, useState, createContext } from "react"
import { getCookiesByName } from "../utils/FormsUtils"

export const dataContext = createContext()

const Context = ({ children }) => {
  const [product, setProduct] = useState([])
  const [user, setUser] = useState([])
  const token = getCookiesByName('jwtCookie')

  useEffect(() => {
    const fetchData = async () => {
      try {
        //decodificando el token
        if (token) {
          const tokenParts = token.split('.');
          if (tokenParts.length === 3) {
            const userData = JSON.parse(atob(tokenParts[1]));
            setUser(userData.user);
            console.log(userData.user);
          } else {
            console.error("Error: Invalid JWT format");
          }
        } else {
          console.error("Error: Token not found");
        }

        //extrayendo los datos de la base para mostrar los productos
        const response = await fetch("http://localhost:8080/api/products", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error("Error al extraer datos");
        }
        const data = await response.json();
        setProduct(data.docs);
      } catch (error) {
        console.error("Error fetching context:", error);
      }
    };

    fetchData();
  }, [token])

  return (
    <dataContext.Provider value={{ product, user }}>{children}</dataContext.Provider>
  )
}

export default Context