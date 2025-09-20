import React, {useContext} from 'react'
import { TiendaContext } from '../context/TiendaContext';
import { Link } from 'react-router-dom'

const ItemProducto = ({ id, imagen, nombre, precio }) => {

    const { moneda } = useContext(TiendaContext);

    return (
        <Link className='text-gray-700 cursor-pointer' to={`producto/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={imagen[0]} alt={nombre} />
            </div>
            <p className='pt-3 pb-1 text-sm'>{nombre}</p>
            <p className='text-sem font-medium'>{moneda} {precio}</p>
        </Link>
    )
}

export default ItemProducto
