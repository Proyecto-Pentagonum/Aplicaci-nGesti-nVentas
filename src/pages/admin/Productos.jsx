import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerProductos, crearProducto, editarProducto, eliminarProducto } from 'utils/api';
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';
import PrivateComponent from 'components/PrivateComponent';

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Ingresar Nuevo Producto");
  const [colorBoton, setColorBoton] = useState('yellow');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      await obtenerProductos(
        (response) => {
          console.log('la respuesta recibida fue', response);
          setProductos(response.data);
          setEjecutarConsulta(false);
          setLoading(false);
        },
        (error) => {
          console.error('Se produjo un error:', error);
          setLoading(false);
        }
      );
    };
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      fetchProductos();
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //Obtener lista de productos desde el backend
    if (mostrarTabla) {
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
        <TablaProductos
        loading={loading}
        listaProductos = {productos}
        setEjecutarConsulta = {setEjecutarConsulta}/>
      ) : (
        <FormularioCreacionProductos
        setMostrarTabla = {setMostrarTabla}
        listaProductos = {productos}
        setProductos = {setProductos}/>
      )}
      <ToastContainer position="bottom-center" autoClose={3500}/>
    </div>
  );
};

const TablaProductos = ({ loading, listaProductos, setEjecutarConsulta }) => {
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
      {loading ? (
          <ReactLoading type='cylon' color='##09eb18' height={666} width={666} />
      ) : (
      <table className='tabla'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre Producto</th>
            <th>Precio Producto</th>
            <th>Unidades en Stock</th>
            <PrivateComponent roleList={['admin']}>
            <th>Acciones</th>
            </PrivateComponent>
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
      )}
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
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    _id:producto._id,
    nombre:producto.nombre,
    precio:producto.precio,
    cantidad:producto.cantidad
  })

  const actualizarProducto = async ()=> {
    //enviar info al backend
    await editarProducto(
      producto._id,
      {
        nombre: infoNuevoProducto.nombre,
        precio: infoNuevoProducto.precio,
        cantidad: infoNuevoProducto.cantidad,
      },
      (response) => {
        console.log(response.data);
        toast.success('Producto modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error('Error modificando el producto');
        console.error(error);
      }
    );
  };

  const borrarProducto = async () => {
    await eliminarProducto(
      producto._id,
      (response) => {
        console.log(response.data);
        toast.success('Producto eliminado con éxito');
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error('Error eliminando el producto');
      }
    );

    setOpenDialog(false);
  }

  return (
    <div>
      {edit ?(
        <>
        <td>{infoNuevoProducto._id}</td>
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
              value={infoNuevoProducto.cantidad}
              onChange = {e=> 
              setInfoNuevoProducto({...infoNuevoProducto, cantidad: e.target.value})
              }
              />
          </td>
        </>
      ) : (
    <>
    <td>{producto._id.slice(20)}</td>
    <td>{producto.nombre}</td>
    <td>{producto.precio}</td>
    <td>{producto.cantidad}</td>
    </>
    )}

    <PrivateComponent roleList={['admin']}>
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
                  onClick={() => borrarProducto()}
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
    </PrivateComponent>
  </div>
  )
}

const FormularioCreacionProductos = ({
  setMostrarTabla,
  listaProductos,
  setProductos}) => {
  const form = useRef(null);

  const submitForm = async (e)=>{
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key)=>{
      nuevoProducto[key] = value;
    });

    await crearProducto(
      {
        nombre: nuevoProducto.nombre,
        precio: nuevoProducto.precio,
        model: nuevoProducto.cantidad,
      },
      (response) => {
        console.log(response.data);
        toast.success('Producto agregado con éxito');
      },
      (error) => {
        console.error(error);
        toast.error('Error creando un producto');
      }
    );
    setMostrarTabla(true);
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
