import { useRef, useState, useEffect } from "react"
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom"
import './Login.css';
const login = () => {
    const [load, setLoad ] = useState(false);
    const formRef = useRef(null)
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current) //tranformo un html en un objeto iterator
        const data = Object.fromEntries(datForm)
        console.log(data)
        const response = await fetch("http://localhost:8080/api/session/login", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (response.status == 200) {
            const datos = await response.json()
            document.cookie = `jwtCookie=${datos.token}; expires${new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toUTCString()};path=/;`
            setLoad(!load)
            setTimeout(()=>{
                setLoad(!load)
                navigate('/home')
            }, 3000)
        } else {
            console.log(response)
        }
    }

    return (
        <div className="loginContainer">
            {load ? <Loader/> : null}
            <div className="card">
                <h1 className="loginTitle">Iniciar sesión</h1>
                <div className="card-body">
                    <form id="loginForm" onSubmit={handleSubmit} ref={formRef}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="formInput" id="email" required autoComplete="current-email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="formInput" id="password" required autoComplete="current-password" />
                        </div>
                        <div className="form-button">
                            <button type="submit" className="buttonLogin">Enviar</button>
                        </div>
                    </form>
                </div>
                <div>
                    <a href="/api/session/githubCallback">Iniciar con GitHub</a>
                </div>
                <div className="buttonRegister">
                    ¿Aún no tenés una cuenta? <a href="/register">Regístrate aquí</a>
                </div>
            </div>
        </div>
    )
}

export default login