import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarResponsive = () => {
  const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
  return (
    <div
      className="md:hidden"
      onClick={() => {
        setMostrarNavegacion(!mostrarNavegacion);
      }}
    >
      <i
        className={`mx-2 fas fa-${
          mostrarNavegacion ? "times" : "bars"
        } hover:text-yellow-500 cursor-pointer`}
      />
      {mostrarNavegacion && (
        <ul className="bg-yellow-800">
          <ResponsiveRoute nombre="Perfil" ruta="/admin/perfil" />
          <ResponsiveRoute nombre="Productos" ruta="/admin/productos" />
          <ResponsiveRoute nombre="Ventas" ruta="/admin/ventas" />
          <ResponsiveRoute nombre="Personas" ruta="/admin/personas" />
        </ul>
      )}
    </div>
  );
};

const ResponsiveRoute = ({ ruta, nombre }) => {
  return (
    <Link to={ruta}>
      <li className="text-white border border-yellow-300 p-1">{nombre}</li>
    </Link>
  );
};

export default SidebarResponsive;
