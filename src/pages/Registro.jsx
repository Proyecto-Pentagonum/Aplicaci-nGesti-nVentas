import React from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
  return (
    <>
      <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Crear cuenta</h2>
      <form className='mt-8 space-y-6'>
        <div className='rounded-md shadow-sm grid grid-cols-2 gap-2'>
          <label htmlFor='nombre'>
            Nombre
            <input
              name='nombre'
              type='text'
              autoComplete='email'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
              placeholder='Nombre'
            />
          </label>
          <label htmlFor='apellido'>
            Apellido
            <input
              name='apellido'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
              placeholder='Apellido'
            />
          </label>
          <label htmlFor='telefono'>
            Teléfono
            <input
              name='telefono'
              type='tel'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
              placeholder='Teléfono'
            />
          </label>
          <label htmlFor='nacimiento'>
            Fecha de Nacimiento
            <input
              name='nacimiento'
              type='date'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
            />
          </label>
          <label htmlFor='correo'>
            Correo Electrónico
            <input
              name='correo'
              type='email'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
            />
          </label>
          <label htmlFor='contraseña'>
            Contraseña
            <input
              name='contraseña'
              type='password'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
            />
          </label>
        </div>

        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
          >
            <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
            </span>
            <Link to='/admin'>Registro</Link>
          </button>
        </div>

        <div className='flex items-center justify-between'>
          <span>¿Ya tiene cuenta?</span>
          <Link to='/login'>
            <span className='font-medium text-yellow-600 hover:text-yellow-500'>Inicio Sesión</span>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Registro;
