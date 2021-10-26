
export class UIVenta {
    addVenta(venta) {
      const ventaList = document.getElementById("venta-list");
      const element = document.createElement("div");
      element.innerHTML = `
              <div class="card text-center mb-4">
                  <div class="card-body">
                      <strong>Nombre cliente</strong>: ${venta.nombreCl}
                      <strong>Cedula</strong>: ${venta.cedulaCl}
                      <strong>Fecha</strong>: ${venta.fechaVenta}
                      <strong>Referencia Producto</strong>: ${venta.refProduct}
                      <strong>Precio</strong>: ${venta.precioProduct} 
                      <strong>Cantidad</strong>: ${venta.cantidadProduct}
                      
                      <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                  </div>
              </div>
              `;
      ventaList.appendChild(element);
    }
    
    resetForm() {
      document.getElementById("venta-form").reset();
    }
  
    deleteProductVenta(element) {
      if (element.name === "delete") {
        element.parentElement.parentElement.remove();
        this.showMessage("Producto Borrado Exitosamente", "Logrado Exitosamente");
      }
    }
  
    showMessage(message, cssClass) {
      const div = document.createElement("div");
      div.className = 'alert alert-${cssClass} mt-2';
      div.appendChild(document.createTextNode(message));
  
      const container = document.querySelector(".container");
      const app = document.querySelector("#App");
  
      container.insertBefore(div, app);
  
      setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 3000);
    }
  }