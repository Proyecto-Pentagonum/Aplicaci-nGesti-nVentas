import React from 'react';
import { Link } from 'react-router-dom';

const ListaUsuarios = () => {
    return (
        <div>
            <div class="list-ventas">
            <ul>
                <li class="subtitulo">
                
                    <span >Usuarios</span>
                </li>
            </ul>
            <ul class="var-buscar-venta">
                <li class="info-buscar">
                    
                        <i class="fas fa-search iconobuscar icono"></i>
                        <input />
                    
                </li>
                
            </ul>
            <br></br>
            <ul>
                <div class="main-table" >
                    <table rules='cols'>
                        <thead>
                            <tr>
                                <th>ID Usuario</th><th>Usuario</th><th>Nombre</th><th>Cedula</th><th>Rol</th><th>Actualizar</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>001</td><td>tmorales@mail.com</td><td>Claudia Hernandez</td><td>25669754</td><td>Administrador</td><td><Link to="/ActualizarUsuario"><i class="fas fa-edit iconotabla"></i></Link></td>
                        </tr>
                        
                    </table>
                </div>
            </ul>
        </div>

        </div>
    );
};

export default ListaUsuarios;