document.addEventListener("DOMContentLoaded", function() {
    let queryLocation=location.search
    let queryString=new URLSearchParams(queryLocation)
    let id=queryString.get("id")

    console.log(id)

    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function(data) {
            console.log(data);

            let detalleProductoEspecifico = document.querySelector(".detalleProducto");
    
            detalleProductoEspecifico.innerHTML=`
    
                <div class="detalleProducto">
                    <h2>${data.title}</h2>
                    <p>Description: ${data.description}</p>
                    <p>Precio: $${data.price}</p>
                    <img src=${data.image} alt="detalleProducto"></img>
                    <a href="./category.html?categoria=${data.category}" class="CategoriaLink">${data.category}</a>
                    <button class="AgregarAlCarrito">Agregar al carrito</button>
                </div>
                `

            let BotonAgregarAlCarrito = document.querySelector(".AgregarAlCarrito");
            BotonAgregarAlCarrito.addEventListener("click", function() {
                let cart = localStorage.getItem("cart");
                if (cart === null) {
                    cart = [];
                } else {
                    cart = JSON.parse(cart);
                }
                cart.push(id);
                localStorage.setItem("cart", JSON.stringify(cart));
            });
        })
        .catch(function(err) {
            console.log(err);
        });
    }); 

