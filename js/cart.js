document.addEventListener("DOMContentLoaded", function() {
    let cart = localStorage.getItem("cart");
    let productosSeleccionados = document.querySelector(".productosSeleccionados");
    let FinalizarCompra = document.querySelector(".FinalizarCompra");

    if (!cart || JSON.parse(cart).length === 0) {
        productosSeleccionados.innerHTML = "<p>Su carrito esta vacio</p>"
    } else {
        cart = JSON.parse(cart);
        cart.forEach(function(id) {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(function(resp) {
                return resp.json();
            })
            .then(function(data) {
                let productoIndividual =`
                    <div class="producto">
                        <h2>${data.title}</h2>
                        <p>Description: ${data.description}</p>
                        <p>Precio: $${data.price}</p>
                        <img src=${data.image} alt="detalleProducto"></img>
                    </div>
                    `
                    productosSeleccionados.innerHTML += productoIndividual;
                            
            })
            .catch(function(err) {
                console.log(err);
            });
        });
    }

    FinalizarCompra.addEventListener('click', function() {
        localStorage.removeItem("cart");
        alert("Gracias por su compra");
        window.location.href = "./index.html";

    })
});

