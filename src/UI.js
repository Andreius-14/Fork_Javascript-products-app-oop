/**
 * User Interface Class
 */
export class UI {

  // 🌱 Funcion - Inserta Fila de Datos
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} - 
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div> 
            </div>
        `;
    productList.appendChild(element);
  }

  // 🌱 Limpia el Formulario
  resetForm() {
    document.getElementById("product-form").reset();
  }

  // 💀 Funcion Eliminar
  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Product Deleted Succsssfully", "success");
    }
  }

  // 🌱 Notificacion Temporal
  showMessage(message, cssClass) {

    // 🦴 Mensaje a Insertar
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // 🦴 Insercion - Enlace al Html
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // 🦴 Insersion - Precisa
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
