import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} alt="logo-digital-melody" className='w-36' />
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/colecciones' className='flex flex-col items-center gap-1'>
          <p>colecciones</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/nosotros' className='flex flex-col items-center gap-1'>
          <p>nosotros</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contacto' className='flex flex-col items-center gap-1'>
          <p>contactanos</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="icono-buscar" />

        <div className='relative group'>
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="icono-perfil" />
          <div className='hidden group-hover:block absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>perfil</p>
              <p className='cursor-pointer hover:text-black'>órdenes</p>
              <p className='cursor-pointer hover:text-black'>salir</p>
            </div>
          </div>
        </div>
        <Link to='/carrito' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="icono-carrito" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
