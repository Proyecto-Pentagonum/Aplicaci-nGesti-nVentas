import React from 'react';
import { useState } from 'react/cjs/react.development';


const RegistrarVenta = () => {
    
    const [mostrarTabla, setMostrarTabla] = useState(false);
    
    return (
    <div>
        <div class="subtitulo sub">
            <span >Registro de ventas</span>
        </div>

        <ul class="id-fecha-factura">
            <li>
                <span>ID factura: 1</span>
            </li>
            <li>
                <span ><input type="date" id="fechaVenta" min="1900" max="2099" step="1" value="2021"
                    class="form-control"/></span>
            </li>
        </ul> 

        <section class = "cajaFormulario container">
            <div id="App">
                <span class="seccion-form"> <b>Area cliente</b></span>
                <ul class="area-cliente">
                    <li>
                        <div class="input_field">
                            <label>Nombre cliente</label>
                            <input class="campoForm" type="text" name="nombre-cliente" id="nombreCl"/>
                        </div>
                    </li>
                    <li>
                        <div class="input_field">
                            <label>Cedula cliente</label>
                            <input class="campoForm" type="number" name="id-cliente" id="cedulaCl" />
                        </div>
                    </li>
                </ul>
                <br></br>
                <br></br>
                <span class="seccion-form"><b>Area ventas</b></span>
                <form id="venta-form">
                    <ul class="area-cliente">
                        <li>
                            <div class="input_field">
                                <label>Referencia articulo</label>
                                <input class="campoForm" type="number" name="id-articulo" id="refProduct"/>
                            </div>
                        </li>
                        <li>
                            <div class="input_field">
                                <label>Cantidad</label>
                                <input class="campoForm" type="number" name="cantidad" id="cantidadProduct"/>
                            </div>
                        </li>
                    </ul>
                    <ul class="area-cliente">
                        <li>
                            <div class="input_field">
                                <label>Precio unitario</label>
                                <input class="campoForm" type="number" name="cantidad" id="precioProduct"/>
                            </div>
                        </li>
                    </ul>
                    <div class="caja-estado-venta">
                    <ul class="opcion-estado-venta">
                        <li>
                            <label>Estado venta</label>
                        </li>
                        <li>
                            <select class="campo-estado-venta" name="Estado-venta">
                                <option value ="En proceso">En proceso</option>
                                <option value="Cancelada">Cancelada</option>
                                <option value="Entregada">Entregada</option>
                            </select>
                        </li>
                    </ul>
                </div>
                    <div class="esp-boton">
                        <button onClick={()=> {setMostrarTabla(true);}} type="submit"  value="Registrar producto" className="boton boton-form ">Registrar producto</button>
                    </div>
                </form>
                
                
                {mostrarTabla ? (<div class="main-table secon-tabla">
                    <table rules='cols'>
                        <thead>
                            <tr>
                                <th>Item</th><th>ID</th><th>Descripción</th><th>Cantidad</th><th>Precio unitario</th><th>Editar</th><th>Borrar</th>
                            </tr>
                        </thead>
                            <tr>
                            <td>1</td><td>1234</td><td>Camisa polo</td><td>1</td><td>$2000</td><td><i class="fas fa-edit iconotabla"></i></td><td><i class="fas fa-trash-alt iconotabla"></i></td>
                        </tr>
                        <tr>
                            <td>2</td><td>1235</td><td>Camiseta</td><td>2</td><td>$5000</td><td><i class="fas fa-edit iconotabla"></i></td><td><i class="fas fa-trash-alt iconotabla"></i></td>
                        </tr>
                        
                        
                    </table>    
                        </div> )
                    :(<div class="main-table secon-tabla">
                    <table rules='cols'>
                        <thead>
                            <tr>
                                <th>Item</th><th>ID</th><th>Descripción</th><th>Cantidad</th><th>Precio unitario</th><th>Editar</th><th>Borrar</th>
                            </tr>
                        </thead>
                        
                        </table>    
                        </div>) }
                    <div class="esp-boton">
                        <button onClick={()=> {(true);}} type="submit"  value="Registrar venta" className="boton boton-form ">Registrar venta</button>
                    </div>
            </div>
            

        </section>

        <script src="../Ventas/AppVentas.js" type="module"></script>
    
    </div>
    );
};



export default RegistrarVenta;