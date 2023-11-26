import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import './Register.css'
const Register = () => {
    const formRef = useRef(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current) //tranformo un html en un objeto iterator
        const data = Object.fromEntries(datForm)
        console.log(data)
        const response = await fetch("http://localhost:8080/api/users/signup", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (response.status == 200) {
            const datos = await response.json()
            console.log(datos)
            navigate('/login')
        } else {
            console.log(response)
        }
    }
  return (
    <div className="registerContainer">
      <form id="formRegister" onSubmit={handleSubmit} ref={formRef}>
        <h2>Register</h2>
        <div className="div-form">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" className="formInput" id="first_name" placeholder="Enter First Name" name="first_name" required autoComplete="current-first_name" />
        </div>
        <div className="div-form">
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" className="formInput" id="last_name" placeholder="Enter Last Name" name="last_name" required autoComplete="current-last_name" />
        </div>
        <div className="div-form">
          <label htmlFor="age">Age:</label>
          <input type="number" className="formInput" id="age" placeholder="Enter Age" name="age" required autoComplete="current-ege" />
        </div>
        <div className="div-form">
          <label htmlFor="email">Email:</label>
          <input type="email" className="formInput" id="email" placeholder="Enter Email" name="email" required autoComplete="current-email" />
        </div>
        <div className="div-form">
          <label htmlFor="password">Password:</label>
          <input type="password" className="formInput" id="password" placeholder="Enter Password" name="password" required autoComplete="current-password" />
        </div>
        <button type="submit" className="registerButton">Submit</button>
        <div className="signupButton">
          <a href="/login">Ya tengo una cuenta</a>
        </div>
      </form>
    </div>
  )
}

export default Register