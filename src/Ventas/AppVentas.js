import { Venta } from "./UIVenta";
import { UIVenta } from "./Venta.js";

    document
    .getElementById("venta-form")
    .addEventListener("submit", function (e) {

    e.preventDefault();
    
    const 
      
      nombreCl = document.getElementById("nombreCl").value,
      cedulaCl = document.getElementById("cedulaCl").value,
      refProduct = document.getElementById("refProduct").value,
      precioProduct = document.getElementById("precioProduct").value,
      cantidadProduct = document.getElementById("cantidadProduct").value,
      fechaVenta = document.getElementById("fechaVenta").value;

    const venta = new Venta(nombreCl, cedulaCl, refProduct, precioProduct, cantidadProduct, fechaVenta);


    const uiventa = new UIVenta();

      if (nombreCl === "" || cedulaCl === "" || refProduct === "" || precioProduct === "" || cantidadProduct === "" || fechaVenta === "") {
        uiventa.showMessage("Ingrese datos en todos los campos", "Atención");
      }

    uiventa.addVenta(venta);
    uiventa.showMessage("Producto agregado exitosamente", "Logrado Exitosamente");
    uiventa.resetForm();
    });

  document.getElementById("venta-list").addEventListener("click", (e) => {
    const uiventa = new UIVenta();
    uiventa.deleteProductVenta(e.target);
    e.preventDefault();
  });