import { useEffect, useContext } from 'react';
import { dataContext } from '../../Context/Context';
import { getCookiesByName } from '../../utils/FormsUtils';
import { BsCart4 } from "react-icons/bs";
import './Nav.css'
const Nav = () => {
  const{user} = useContext(dataContext)

    useEffect(() => {
        const signButton = document.getElementById("signinButton");
    
        const handleClick = () => {
          console.log("click")
          if (signButton.textContent === 'Signout') {
            window.location.href = "/logout";
          } else {
            window.location.href = "/login";
          }
        };
    
        signButton.addEventListener('click', handleClick);
    
        return () => {
          signButton.removeEventListener('click', handleClick);
        };
      }, []);

    return (
      <header className="header">
      <nav className="nav">
        <div className="nav-title">
          <a href="/home">EcoSound</a>
        </div>
        <ul className="nav-list">
          <a className="n-list" href="/home">Home</a>
          <a className="n-list" href="/product">products</a>
          <a className="n-list" href="/chat">chat</a>
        </ul>
        <div className="button-sesion">
          <a href="/carrito"><BsCart4 className='carrito'/></a>
          {user ? (
            <>
              <span id="span" style={{ marginRight: '20px', color:'white' }}>
                Hola, {user.first_name}
              </span>
              <button id="signinButton">Signout</button>
            </>
          ) : (
            <button id="signinButton">Login</button>
          )}
        </div>
      </nav>
    </header>

    )
}

export default Nav