let queryLocation=location.search
let queryString=new URLSearchParams(queryLocation)
let categoria= queryString.get("categoria")

let titulo= document.querySelector("article h2")
let producto=document.querySelector(".container")

fetch(`https://fakestoreapi.com/products/category/${categoria}`)
.then(function(resp){
 return resp.json()
})
.then(function(data){
    console.log(data);
 titulo.innerHTML=` <h2>Categoria de ${categoria}</h2>`
for (let i = 0; i < data.length; i++) {
  producto.innerHTML+=` 
            <div class="producto">
                <img src=${data[i].image} alt="Productos">
                <h2>${data[i].title}</h2>
                <p>Descripcion: ${data[i].description}/p>
                <p>Precio: $${data[i].price}</p>
                <a href="./producto.html?id=${data[i].id}">Ver mas</a>
            </div>`
    
}

})
.catch(function(err){
    console.log(err);
})