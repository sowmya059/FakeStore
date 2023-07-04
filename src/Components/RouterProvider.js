import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'

const RouterProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default RouterProvider
