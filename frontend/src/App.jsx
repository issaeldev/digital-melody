import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Colecciones from './pages/Colecciones'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Producto from './pages/Producto'
import Carrito from './pages/Carrito'
import Login from './pages/Login'
import RealizarOrden from './pages/RealizarOrden'
import Ordenes from './pages/Ordenes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/colecciones' element={<Colecciones />} />        
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='producto/:productoId' element={<Producto/>}/>
        <Route path='carrito' element={<Carrito/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='realizar-orden' element={<RealizarOrden/>}/>
        <Route path='ordenes' element={<Ordenes/>}/>
      </Routes>
    </div>
  )
}

export default App
