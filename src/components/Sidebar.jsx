import React from 'react'
import Logo1 from 'components/ImagenLogo';
import { Link } from 'react-router-dom';
import useActiveRoute from 'hooks/useActiveRoute'

const Sidebar = () => {
    return (
        <nav className='hidden md:flex md:w-72 border border-gray-300 h-full flex-col bg-yellow-400 p-4'>
        <Link to="/admin">
        <Logo1 />
        </Link>
        <div className="my-4">
        <Ruta icono="fas fa-user" ruta="/admin/perfil" nombre="Perfil"/>
        <Ruta icono="fas fa-tshirt" ruta="/admin/productos" nombre="Productos"/>
        <Ruta icono="fas fa-hand-holding-usd" ruta="/admin/ventas" nombre="Ventas"/>
        <Ruta icono="fas fa-users" ruta="/admin/personas" nombre="Personas"/>
        </div>
        <button>Cerrar Sesión</button>
        </nav>
    
    );
};

const Ruta = ({icono, ruta, nombre}) => {

    const isActive = useActiveRoute(ruta)
    return (
        <Link to={ruta}>
            <button 
                className={`p-1 my-2  bg-${
                    isActive ? 'gray' : 'yellow'
                  }-700 hover:bg-yellow-900 flex w-full items-center text-white rounded-md`}>
                {nombre}
            </button>
        </Link>
    );
};

export default Sidebar;
