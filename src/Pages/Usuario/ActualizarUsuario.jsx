import React from 'react';

const ActualizarUsuario = () => {
    return (
        <div>
            <div class="subtitulo sub">
                <span >Actualización de usuario</span>
            </div>
            <section class = "cajaFormulario">
                    <span class="seccion-form"> <b>Información usuario</b></span>
                    <br></br>
                    <ul class="area-cliente">
                        <li>
                            <div class="input_field">
                                <label>Usuario</label>
                                <input class="campoForm" type="email" name="email-usuario"/>
                            </div>
                        </li>
                    </ul>
                    <br></br>
                    <ul class="area-cliente">
                        <li>
                            <div class="caja-estado-venta">
                                <ul class="opcion-estado-venta">
                                    <li>
                                        <div class="input_field">
                                        <label>Rol usuario</label>
                                        </div>
                                    </li>
                                    <li>
                                        <select class="campo-estado-venta" name="Rol-usuario">
                                            <option value ="Sin rol">Sin rol</option>
                                            <option value="Administrador">Administrador</option>
                                            <option value="Vendedor">Vendedor</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <br></br>
                    
                    <span class="seccion-form"> <b></b></span>
                    <ul class="area-cliente">
                        <li>
                            <div class="caja-estado-venta">
                                <ul class="opcion-estado-venta">
                                    <li>
                                        <div class="input_field">
                                        <label>Estado de usuario</label>
                                        </div>
                                    </li>
                                    <li>
                                        <select class="campo-estado-venta" name="Rol-usuario">
                                            <option value ="Sin rol">Pendiente</option>
                                            <option value="Administrador">Autorizado</option>
                                            <option value="Vendedor">No autorizado</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </li>    
                    </ul>
                    
                    <div class="botones-reg-venta">
                        <ul class="botones-factura">
                            <il>
                                <input class='boton boton-form' type="button"  name='registrar-venta' value="Actualizar usuario"/>
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

export default ActualizarUsuario;