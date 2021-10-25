import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
return (
    <div className="max-w-md w-full space-y-8">
        <h2 className="m-3 text-center text-2xl font-extrabold text-gray-700">
        Inicie sesión en su cuenta
        </h2>
        <form className="mt-8 max-w-md">
        <div>
        <input 
        className='appearance-none rounded-none relative block w-full px-3 py-2 
                    border border-gray-300 placeholder-gray-500 text-gray-900
                    rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
        type="email"
        placeholder='username@example.com'
        required 
      />
        <input
            className='appearance-none rounded-none relative block w-full px-3 py-2 
            border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md
            focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
            type='password'
            required
          />
        </div>
        <div className='flex justify-between'>
          <div>
            <label htmlFor='Recordarme'>
              <input type='checkbox' name='recordarme' />
              Recuerdame
            </label>
          </div>
          <div>
            <Link to='/'>¿Olvidó su contraseña?</Link>
          </div>
        </div>
        <div>
          <Link to='/admin'>
            <button type='submit'>Iniciar Sesion</button>
          </Link>
        </div>
        <div>O</div>
        <div>
          <button>Continuar con Google</button>
        </div>
      </form>
    </div>
  );
};

export default Login;