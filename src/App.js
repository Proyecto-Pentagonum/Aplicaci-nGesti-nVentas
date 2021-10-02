import { Product } from "./Product.js";
import { UI } from "./UI.js";


document
.getElementById("product-form")
.addEventListener("submit", function (e) {

    e.preventDefault();


    const nombre = document.getElementById("nombre").value,
      precio = document.getElementById("precio").value,
      fecha = document.getElementById("fecha").value;


    const product = new Product(nombre, precio, fecha);


    const ui = new UI();


    if (nombre === "" || precio === "" || fecha === "") {
      ui.showMessage("Ingrese datos en todos los campos", "Atención");
    }


   ui.addProduct(product);
   ui.showMessage("Producto agregado exitosamente", "Logrado Exitosamente");
   ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});