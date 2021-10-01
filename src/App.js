import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
.getElementById("product-form")
.addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const nombre = document.getElementById("nombre").value,
      precio = document.getElementById("precio").value,
      fecha = document.getElementById("fecha").value;

    // Create a new Object Product
    const product = new Product(nombre, precio, fecha);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (nombre === "" || precio === "" || fecha === "") {
      ui.showMessage("Ingrese datos en todos los campos", "Atención");
    }

    // Save Product
   ui.addProduct(product);
   ui.showMessage("Producto agregado exitosamente", "Logrado Exitosamente");
   ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});