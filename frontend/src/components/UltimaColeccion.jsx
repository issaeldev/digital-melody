import React, { useContext, useEffect, useState } from 'react'
import { TiendaContext } from '../context/TiendaContext'
import Titulo from './Titulo'
import ItemProducto from './ItemProducto'

const UltimaColeccion = () => {
    const { productos } = useContext(TiendaContext);
    const [ultimosProductos, setUltimosProductos] = useState([]);

    useEffect(() => {
        setUltimosProductos(productos.slice(0,10));
    }, []);

    console.log(productos)

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3x1'>
                <Titulo texto1={'ultima'} texto2={'coleccion'}/>
                <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>
                The Mission (known as the Mission UK in the United States) are an English gothic rock band formed in 1986. Initially known as the Sisterhood, the band was started by frontman Wayne Hussey and bassist Craig Adams (both from the Sisters of Mercy), soon adding drummer Mick Brown (Red Lorry Yellow Lorry) and guitarist Simon Hinkler (Artery and Pulp). Aside from Hussey, the lineup has changed several times over the years, and the band has been on hiatus twice.
                </p>
            </div>

            {/* Muestra de productos */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    ultimosProductos.map((item, indice)=>(
                        <ItemProducto key={indice} id={item._id} imagen={item.image} nombre={item.name} precio={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default UltimaColeccion
