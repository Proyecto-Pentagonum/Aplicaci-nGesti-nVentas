import React from 'react';
import { Link } from 'react-router-dom';
import TriggerDarkMode from './TriggerDarkMode';

const Navbar = () => {
    return (
        <nav className='bg-yellow-500'>
            <ul className='flex w-full justify-between my-2 px-3'>
                <li>Logo</li>
                <li>Navegacion1</li>
                <li>Navegacion2</li>
                <li>
                <TriggerDarkMode /> 
                </li>
                <li className='px-3'>
                    <Link to='/login'>
                    <button className='bg-yellow-700 p-1 px-2 text-white rounded-lg 
                    shadow-md hover:bg-yellow-400'>
                        Inicio Sesión
                    </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
