import React, { useEffect, useState } from 'react';

const ActualizarVenta = () => {
    
    const[fechaActualizacion, setfechaActualizacion] = useState ("");

    useEffect(() => {
        console.log('Fecha actualizacion ');
    
    }, [fechaActualizacion]);
    
    const actualizar = () =>{

    } ;

    return (
        <div>
            <div class="subtitulo sub">
                <span >Actualización de ventas</span>
            </div>

            <ul class="id-fecha-factura">
                <li>
                    <span><b>ID factura: 1</b></span>
                </li>
            </ul>  
         
            <section class = "cajaFormulario">
                 <span class="seccion-form"><b>Fecha</b></span>
                    <div class="date-actualizar-vent">
                                <label className="seccion-form">Fecha actualización</label>
                                <input onChange={(e) => {setfechaActualizacion('fecha: ', e.target.value);}} className="seccion-date-actual-venta" type="date"/>
                    </div>
                        
                    <br></br>
                    <br></br>
                    <span class="seccion-form"> <b>Area cliente</b></span>
                    <ul class="area-cliente">
                        <li>
                            <div class="input_field">
                                <label>Nombre cliente</label>
                                <input class="campoForm" type="text" name="nombre-cliente"/>
                            </div>
                        </li>
                        <li>
                            <div class="input_field">
                                <label>Cedula cliente</label>
                                <input class="campoForm" type="number" name="id-cliente"/>
                            </div>
                        </li>
                    
                    </ul>
                    
                    <br></br>
                    <br></br>
                    
                    <span class="seccion-form"><b>Area ventas</b></span>
                    <ul class="area-cliente">
                        <li>
                            <div class="input_field">
                                <label>ID articulo</label>
                                <input class="campoForm" type="number" name="id-articulo"/>
                            </div>
                        </li>
                        <li>
                            <div class="input_field">
                                <label>Cantidad</label>
                                <input class="campoForm" type="number" name="cantidad"/>
                            </div>
                        </li>
                    </ul>
                    <div class="esp-boton">
                        <button class="boton boton-form">Registrar producto</button>
                    </div>

                <div class="main-table secon-tabla">
                    <table rules='cols'>
                        <thead>
                            <tr>
                                <th>Item</th><th>ID</th><th>Descripción</th><th>Cantidad</th><th>Precio unitario</th><th>Precio acumulado</th><th>Editar</th><th>Borrar</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>1</td><td>1234</td><td>Camisa polo</td><td>1</td><td>$2000</td><td>10000</td><td><i class="fas fa-edit iconotabla"></i></td><td><i class="fas fa-trash-alt iconotabla"></i></td>
                        </tr>
                        <tr>
                            <td>2</td><td>1235</td><td>Camiseta</td><td>2</td><td>$5000</td><td>5000</td><td><i class="fas fa-edit iconotabla"></i></td><td><i class="fas fa-trash-alt iconotabla"></i></td>
                        </tr>
                    </table>
                    
                </div>
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
                <div class="caja-estado-venta">
                    <ul class="total">
                        <li>
                            <span>Total:</span>
                        </li>
                        <li>
                            <span>$10000</span>
                        </li>
                    </ul>
                </div>

                    <div class="botones-reg-venta">
                        <ul class="botones-factura">
                            <il>
                                <input class='boton boton-form' type="button" onClick={actualizar} name='registrar-venta' value="Actualizar venta"/>
                            </il>
                            <il>
                               <input class='boton boton-form' type="button" name='cancelar-venta' value="Cancelar actualización"/>
                            </il>
                        </ul>
                    </div>
            </section>    
        </div>
    );
};

export default ActualizarVenta;