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
                                <th>ID Factura</th><th>ID producto</th><th>Cantidad</th><th>Precio unitario</th><th>Fecha venta</th><th>Cedula Cliente</th><th>Nombre cliente</th><th>Valor total</th><th>Id vendedor</th><th>Actualizar</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>001</td><td>25669754</td><td>1</td><td>1000</td><td>10/10/2021</td><td>25336941</td><td>Leo Martinez</td><td>10000</td><td>121</td><td><Link to="/ActualizarVenta"><i class="fas fa-edit iconotabla"></i></Link></td>
                        </tr>
                        
                    </table>
                </div>
            </ul>
        </div>
        
    );
};

export default ListaVentas;