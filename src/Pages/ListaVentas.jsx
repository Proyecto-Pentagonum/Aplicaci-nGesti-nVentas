import React from 'react';
import { Link } from 'react-router-dom';


const ListaVentas = () => {
    
    

    return (
        
        <div class="list-ventas">
            <ul>
                <li class="subtitulo">
                
                    <span >Ventas</span>
                </li>
            </ul>
            <ul class="var-buscar-venta">
                <li class="info-buscar">
                    
                        <i class="fas fa-search iconobuscar icono"></i>
                        <input />
                    
                </li>
                
                <li>       
                    <Link to="/RegistrarVenta"><button class="btn btn-warning">Registrar venta</button></Link>
                </li>
            </ul>
            <br></br>
            <ul>
                <div class="main-table" >
                    <table rules='cols'>
                        <thead>
                            <tr>
                                <th>ID Factura</th><th>Fecha pago</th><th>No. artículos</th><th>ID Cliente</th><th>Nombre cliente</th><th>Valor total</th><th>Estado venta</th><th>Actualizar</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>001</td><td>22/09/2021</td><td>14</td><td>25669754</td><td>Leo Martinez</td><td>10000</td><td>Entregado</td><td><Link to="/ActualizarVenta"><i class="fas fa-edit iconotabla"></i></Link></td>
                        </tr>
                        
                    </table>
                </div>
            </ul>
        </div>
        
    );
};

export default ListaVentas;