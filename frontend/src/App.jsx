import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Producto from './pages/Producto'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9xw]'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/colecciones' element={<Colecciones />} />        
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='producto/:productoId' element={<Producto/>}/>
        <Route path='carrito' element={<Carrito/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='realizar-orden' element={<RealizarOrden/>}/>
        <Route path='ordenes' element={<Ordenes/>}/>
        <Route path='*' element={<NotFound/>}/>
       </Routes>

    </div>
  )
}

export default App
