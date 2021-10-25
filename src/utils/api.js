import axios from 'axios';
const baseURL = 'http://localhost:5000';

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerProductos = async (successCallback, errorCallback) => {
    const options = {
      method: 'GET',
      url: `${baseURL}/vehiculos/`,
      headers: {
        Authorization: getToken(),
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
  export const crearProducto = async (data, successCallback, errorCallback) => {
    const options = {
      method: 'POST',
      url: `${baseURL}/productos/`,
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  export const editarProducto = async (id, data, successCallback, errorCallback) => {
    const options = {
      method: 'PATCH',
      url: `${baseURL}/productos/${id}/`,
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
  
  export const eliminarProducto = async (id, successCallback, errorCallback) => {
    const options = {
      method: 'DELETE',
      url: `${baseURL}/productos/${id}/`,
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  export const obtenerPersonas = async (successCallback, errorCallback) => {
    const options = {
      method: 'GET',
      url: `${baseURL}/personas/`,
      headers: {
        Authorization: getToken(),
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  export const obtenerDatosPersona = async (successCallback, errorCallback) => {
    const options = {
      method: 'GET',
      url: `${baseURL}/personas/self/`,
      headers: {
        Authorization: getToken(), // 3. enviarle el token a backend
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  export const editarPersona = async (id, data, successCallback, errorCallback) => {
    const options = {
      method: 'PATCH',
      url: `${baseURL}/personas/${id}/`,
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  export const crearVenta = async (data, successCallback, errorCallback) => {
    const options = {
      method: 'POST',
      url: `${baseURL}/ventas/`,
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
  