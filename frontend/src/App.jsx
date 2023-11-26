import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import NewProducts from './components/NewProducts/NewProducts'
import Products from './components/Products'
import Nav from './components/Nav/Nav'
import Context from './Context/Context'
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart'
import Error from './components/Error/Error'


const App = () => {
  return (
    <>
    <Context>
  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/new-products' element={<NewProducts/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/carrito' element={<Cart/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
  </BrowserRouter>
  </Context>
    </>
  )
}

export default App
