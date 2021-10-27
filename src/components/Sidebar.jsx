import React from 'react'
import Logo1 from 'components/ImagenLogo';
import { Link } from 'react-router-dom';
import useActiveRoute from 'hooks/useActiveRoute'
import { useAuth0 } from '@auth0/auth0-react';
import PrivateComponent from './PrivateComponent';


const Sidebar = () => {
    const { user, logout } = useAuth0();

    const cerrarSesion = () => {
        logout({ returnTo: 'http://localhost:3000' });
        localStorage.setItem('token', null);
    };
    return (
        <nav className='hidden md:flex md:w-72 border border-gray-300 h-full flex-col bg-yellow-400 p-4'>
        <Link to="/admin">
        <Logo1 />
        </Link>

        <div className="my-4">
        <Ruta icono="fas fa-user" ruta="/admin/perfil" nombre="Perfil" persona={user}/>
        <PrivateComponent roleList={['admin']}>
        <Ruta icono="fas fa-tshirt" ruta="/admin/productos" nombre="Productos"/>
        </PrivateComponent>
        <PrivateComponent roleList={['admin', 'vendedor']}>
        <Ruta icono="fas fa-hand-holding-usd" ruta="/admin/ventas" nombre="Ventas"/>
        </PrivateComponent>
        <PrivateComponent roleList={['admin']}>
        <Ruta icono="fas fa-users" ruta="/admin/personas" nombre="Personas"/>
        </PrivateComponent>
        </div>
        <button onClick={()=> cerrarSesion()}>Cerrar Sesión</button>
        </nav> 
    );
};

const Ruta = ({icono, ruta, nombre, persona}) => {
    console.log('persona', persona);
    const isActive = useActiveRoute(ruta)
    return (
        <Link to={ruta}>
            <button 
                className={`p-1 my-2  bg-${
                    isActive ? 'gray' : 'yellow'
                  }-700 hover:bg-yellow-900 flex w-full items-center text-white rounded-md`}>
                {persona ? (
                    <>
                    <img src={persona.picture} className='h-5 w-5 rounded-full' />
                    {persona.nombre}
            </>
        ) : (
            <>
            <i className={`${icono} w-10`} />
            {nombre}
        </>
        )}
        </button>
        </Link>
    );
};

export default Sidebar;
