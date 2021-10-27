import React from "react";
import Google from "media/logoGoogle.png";
import { Link } from "react-router-dom";

const Login = () => {
return (
    <>
    <div className="max-w-md w-full space-y-8">
        <h2 className="m-3 text-center text-2xl font-extrabold text-gray-700">
        Inicie sesión en su cuenta
        </h2>
        <form className="mt-8 space-y-6">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
            <div>
            <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2
                        border border-gray-300 placeholder-gray-500 text-gray-700
                        rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500
                        focus:z-10 sm:text-sm"
                placeholder="Correo Electrónico"
            />
            </div>
            <div>
            <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2
                    border border-gray-300 placeholder-gray-500 text-gray-700
                    rounded-t-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600
                    focus:z-10 sm:text-sm mt-3"
                placeholder="Contraseña"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="recordarme"
                name="recordarme"
                type="checkbox"
                className="h-4 w-4 text-yellow-600 focus:ring-yellow-600 border-gray-300 rounded"
              />
              <label
                htmlfor="recordarme"
                className="ml-2 block text-sm text-gray-900"
              >
                Recordarme
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-yellow-600 hover:text-yellow-500"
              >
                ¿Olvidó su contraseña?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent
                        text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              <Link to="/admin/productos">Inicio de sesión</Link>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span>¿No tiene cuenta?</span>
            <Link to="/registro">
              <span className="font-medium text-yellow-600 hover:text-yellow-500">
                Registro
              </span>
            </Link>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center">
        <span className="mx-4">------------------------</span>
        <h2 className="my-4 text-center text-sm font-extrabold text-gray-900">
          Ó
        </h2>
        <span className="mx-4">------------------------</span>
      </div>

      <div className="max-w-md w-full">
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent
                text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <div className="flex items-center justify-start">
              <img src={Google} alt="Logo Google" className="h-6 w-6" />
              <span className="mx-4">Continuar con Google</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;