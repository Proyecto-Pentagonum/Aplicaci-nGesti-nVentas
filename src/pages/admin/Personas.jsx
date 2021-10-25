import PrivateComponent from 'components/PrivateComponent';
import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import { editarPersona } from 'utils/api';
import { obtenerPersonas } from 'utils/api';

const Personas = () => {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
      const fetchPersonas = async () => {
        await obtenerPersonas(
          (respuesta) => {
            console.log('personas', respuesta.data);
            setPersonas(respuesta.data);
          },
          (err) => {
            console.log(err);
          }
        );
      };
      fetchPersonas();
    }, []);
  
    return (
      <div>
        <div>Admin Personas</div>
        <PrivateComponent roleList={['admin']}>
          <button className='bg-red-400'>Saludos</button>
        </PrivateComponent>
        <table className='tabla'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((user) => {
              return (
                <tr key={nanoid()}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <EstadoPersona user={user} />
                  </td>
                  <td>
                    <RolesPersona user={user} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  
  const RolesPersona = ({ user }) => {
    const [rol, setRol] = useState(user.rol);
  
    useEffect(() => {
      const editPersona = async () => {
        await editarPersona(
          user.id,
          { rol },
          (res) => {
            console.log(res);
          },
          (err) => {
            console.error(err);
          }
        );
      };
      if (user.rol !== rol) {
        editPersona();
      }
    }, [rol, user]);
  
    return (
      <select value={rol} onChange={(e) => setRol(e.target.value)}>
        <option value='' disabled>
          Seleccione un rol
        </option>
        <option value='admin'>Admin</option>
        <option value='vendedor'>Vendedor</option>
        <option value='usuario'>Usuario</option>
      </select>
    );
  };
  
  const EstadoPersona = ({ user }) => {
    const [estado, setEstado] = useState(user.estado ?? '');
  
    useEffect(() => {
      const editPersona = async () => {
        await editarPersona(
          user.id,
          { estado },
          (res) => {
            console.log(res);
          },
          (err) => {
            console.error(err);
          }
        );
      };
      if (user.estado !== estado) {
        editPersona();
      }
    }, [estado, user]);
  
    return (
      <select value={estado} onChange={(e) => setEstado(e.target.value)}>
        <option value='' disabled>
          Seleccione un estado
        </option>
        <option value='autorizado' className='text-green-500'>
          Autorizado
        </option>
        <option value='pendiente' className='text-yellow-500'>
          Pendiente
        </option>
        <option value='rechazado' className='text-red-500'>
          Rechazado
        </option>
      </select>
    );
  };
  
  export default Personas;
