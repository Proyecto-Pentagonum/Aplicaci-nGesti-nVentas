import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import obtenerProductos from '/utils/api';

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Ingresar Nuevo Producto");
  const [colorBoton, setColorBoton] = useState('yellow');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    const options = { method: 'GET', url:''};
    await axios.request(options)
    .then(function(response) {
      setProductos(response.data);
    })
    if (ejecutarConsulta) {
      obtenerProductos();
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta])

  useEffect(() => {
    //Obtener lista de productos desde el backend
    if (mostarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Ingresar Nuevo Producto");
      setColorBoton("yellow");
    } else {
      setTextoBoton("Mostrar Todos los Productos");
      setColorBoton("green")
    }
  }, [mostrarTabla]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-6">
      <div className="flex flex-col w-full">
        <h2 className="text-center text-3xl font-bold text-yellow-900">
          Módulo Gestión de Productos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white bg-${colorBoton}-900 p-2 rounded-md hover:bg-yellow-600 mt-6`}
        >
          {textoBoton}
        </button>
      </div>

      {mostrarTabla ? (
        <TablaProductos listaProductos = {productos} setEjecutarConsulta = {setEjecutarConsulta}/>
      ) : (
        <FormularioCreacionProductos
        setMostrarTabla = {setMostrarTabla}
        listaProductos = {productos}
        setProductos = {setProductos}/>
      )}
      <ToastContainer position="bottom-center" autoClose={5000}/>
    </div>
  );
};

const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
  const form = useRef(null);
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {
    setProductosFiltrados(
      listaProductos.filter((elemento)=>{
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProductos]);
  
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <input
      value={busqueda}
      onChange={(e)=> setBusqueda(e.target.value)}
      placeholder='Buscar'
      className='border border-gray-700 px-3 py-1 self-start rounded-md'/>
      <h2 className="text-2xl font-bold text-yellow-900 mt-6 items-center">
        Listado Productos
      </h2>
      <div className='hidden md:flex w-full'>
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre Producto</th>
            <th>Precio Producto</th>
            <th>Unidades en Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((producto) => {
            return (
              <FilaProducto
              key={nanoid()}
              producto = {producto}
              setEjecutarConsulta = {setEjecutarConsulta}/>
            );
          })}
        </tbody>
        </table>
        </div>
        <div className='flex flex-col w-full m-2 md:hidden'>
          {productosFiltrados.map((el) => {
            return (
              <div className='bg-gray-300 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                <span>{el.nombre}</span>
                <span>{el.precio}</span>
                <span>{el.cantidad}</span>
              </div>
            )
          })}
        </div> 
    </div>
  );
};

const FilaProducto = ({producto, setEjecutarConsulta}) => {
  const [edit, setEdit] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    nombre:producto.name,
    precio:producto.precio,
    cantidad:producto.cantidad
  })

  const actualizarProducto = ()=> {
    console.log(infoNuevoProducto);
    //enviar info al backend
    const options = {
      method: 'PATCH',
      url: 'https://',
      headers: { 'Content-Type' : 'application/json'},
      data: { ...infoNuevoProducto, id: producto.id},
    };

    await axios
      .request(options)
      .then(function(response){
        console.log(response.data);
        toast.success('Producto Actualizado Exitosamente');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function(error){
        toast.error('Error Actualizando Producto')
        console.log(error);
      });
  };

  const eliminarProducto = (producto) => {
    const options = {
      method: 'DELETE',
      url: 'https://',
      headers: { 'Content-Type' : 'application/json'},
      data: { id: producto.id},
    };

  await axios
    .request(options)
    .then(function(response) {
      console.log(response.data);
      toast.success('Producto Borrado Exitosamente');
      setEjecutarConsulta(true);   
    })
    .catch(function(error) {
      console.error(error);
      toast.error('Algo Falló')
    });
    setOpenDialog(false);
  };

  return (
    <div>
      {edit ?(
        <>
          <td>
            <input className="bg-gray-50 border border-yellow-700 p-2 rounded-lg m-2"
              type="text" 
              value={infoNuevoProducto.nombre}/></td>
              onChange = {e=> setInfoNuevoProducto({...infoNuevoProducto, nombre: e.target.value})}
          <td>
            <input className="bg-gray-50 border border-yellow-700 p-2 rounded-lg m-2"
              type="number"
              min='15000'
              value={infoNuevoProducto.precio}/></td>
              onChange = {e=> setInfoNuevoProducto({...infoNuevoProducto, precio: e.target.value})}
          <td>
            <input className="bg-gray-50 border border-yellow-700 p-2 rounded-lg m-2"
              type="number"
              min='1'
              value={infoNuevoProducto.cantidad}/></td>
              onChange = {e=> setInfoNuevoProducto({...infoNuevoProducto, cantidad: e.target.value})}
        </>
      ) : (
    <>
    <td>{producto.nombre}</td>
    <td>{producto.precio}</td>
    <td>{producto.cantidad}</td>
    </>
    )}
    <td>
      <div className='flex w-full justify-around'>
        {edit ? (
          <>
          <Tooltip title='Confirmar Edición' arrow>
            <i
            onClick={()=> actualizarProducto()}
            className='fas fa-check text-green-800 hover:text-green-500' />
          </Tooltip>
          <Tooltip title='Cancelar Edición' arrow>
            <i
            onClick={()=> setEdit(!edit)}
            className='fas fa-ban text-yellow-700 hover:text-yellow-500' />
          </Tooltip>
        </>
         ) : (
          <>
           <Tooltip title='Editar Producto' arrow>
           <i 
          onClick={()=> setEdit(!edit)}
          className='fas fa-pencil-alt text-green-800 hover:text-green-500' />
          </Tooltip>       
          <Tooltip title='Eliminar Producto' arrow>
        <i 
          onClick={()=> setOpenDialog(true)} 
          className='fas fa-trash text-red-500 hover:text-red-700' />
        </Tooltip>
        </>
         )}
      </div>

      <Dialog open={openDialog}>
            <div className='p-8 flex flex-col'>
              <h1 className='text-gray-900 text-2xl font-bold'>
                ¿Está seguro de eliminar el producto?
              </h1>
              <div className='flex w-full items-center justify-center my-4'>
                <button
                  onClick={() => eliminarProducto()}
                  className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
                >
                  Sí
                </button>
                <button
                  onClick={() => setOpenDialog(false)}
                  className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'
                >
                  No
                </button>
              </div>
            </div>
          </Dialog>
    </td>
  </div>
  )
}

const FormularioCreacionProductos = ({
  setMostrarTabla,
  listaProductos,
  setProductos}) => {
  const form = useRef(null);

  const submitForm = (e)=>{
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key)=>{
      nuevoProducto[key] = value;
    });
    setMostrarTabla(true);
    toast.success("¡Agregado Exitosamente!");
    
    //toast.error('Algo Falló :(');

  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-yellow-900 mt-6">
        Ingresar Nuevo Producto
      </h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col mt-6'>
        <label className='flex flex-col' htmlFor="nombre">
        Nombre Producto
        <input
          name="nombre"
          className="bg-gray-50 border border-yellow-700 p-2 rounded-lg m-2"
          type="text"
          placeHolder="Artículo"
          
          required
        />
        </label>
        <label className='flex flex-col' htmlFor="precio">
        Precio Producto
        <input
          name="precio"
          className="bg-gray-50 border border-yellow-700 p-2 rounded-lg m-2"
          type="number"
          min="15000"
          placeHolder="Precio"
          
          required
        />
        </label>
        <label className='flex flex-col' htmlFor="cantidad">
        Unidades en Stock
        <input
          name="cantidad"
          className="bg-gray-50 border border-yellow-700 p-2 rounded-lg m-2"
          type="number"
          min="1"
          placeHolder="Cantidad"
          
          required
        />
        </label>
        <button
          type="submit"
          className="col-span-2 text-white bg-yellow-500 p-2 rounded-md shadow-md hover:bg-white hover:text-yellow-600 mt-6"
        >
          Guardar Producto
        </button>
      </form>
    </div>
  );
};

export default Productos;
