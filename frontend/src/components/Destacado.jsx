import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Destacado = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/*Lado izquierdo - Imagen*/}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>destacado</p>
                </div>
                <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>nuevos productos</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>explora la colección</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
        </div> 
        {/*Lado derecho - Imagen*/}
        <div className='w-full sm:w-1/2'>
            <img className='w-full h-full object-cover' src={assets.hero_img} alt="destacado"/>
        </div>   
    </div>
    )
}

export default Destacado
