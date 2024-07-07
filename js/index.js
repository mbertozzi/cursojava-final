fetch('https://fakestoreapi.com/products/categories')

.then(function (resp) {
    return resp.json()
})
.then(function(data){
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
console.log(data);
})
.catch(function (err){
    console.log(err);
})

let electronics=document.querySelector("#electronica section")

fetch('https://fakestoreapi.com/products/category/electronics')

.then(function (resp) {
    return resp.json()
})
.then(function(data){
console.log(data);
for (let i = 0; i < data.length; i++) {
    electronics.innerHTML+=`
       
            <div class="producto">
                <img src=${data[i].image} alt="Productos">
                <h2>${data[i].title}</h2>
                <p>Description: ${data[i].description}/p>
                <p>Precio: $${data[i].price}</p>
                <a href="./producto.html?id=${data[i].id}">Ver mas</a>
            </div>
        `

}

})
.catch(function (err){
    console.log(err);
})

let RopaHombre=document.querySelector("#hombre section")

fetch(`https://fakestoreapi.com/products/category/men's clothing`)

.then(function (resp) {
    return resp.json()
})
.then(function(data){
console.log(data);
for (let i = 0; i < data.length; i++) {
    RopaHombre.innerHTML+=`
       
            <div class="producto">
                <img src=${data[i].image} alt="Productos">
                <h2>${data[i].title}</h2>
                <p>Description: ${data[i].description}/p>
                <p>Precio: $${data[i].price}</p>
                <a href="./producto.html?id=${data[i].id}">Ver mas</a>
            </div>
        `

}

})
.catch(function (err){
    console.log(err);
}) 

let RopaMujer=document.querySelector("#mujer section")

fetch(`https://fakestoreapi.com/products/category/women's clothing`)

.then(function (resp) {
    return resp.json()
})
.then(function(data){
console.log(data);
for (let i = 0; i < data.length; i++) {
    RopaMujer.innerHTML+=`
       
            <div class="producto">
                <img src=${data[i].image} alt="Productos">
                <h2>${data[i].title}</h2>
                <p>Description: ${data[i].description}/p>
                <p>Precio: $${data[i].price}</p>
                <a href="./producto.html?id=${data[i].id}">Ver mas</a>
            </div>
        `

}
})


.catch(function (err){
    console.log(err);
})

let queryLocation=location.search
let queryString= new URLSearchParams(queryLocation)
let email=queryString.get("Email")

if (email==null) {
    console.log(email);
}else{

let datos={usuario:""}

datos.usuario=email

if (localStorage.getItem("array")==null) {
    let lista=[]
    console.log(lista);
    lista.push(datos)
    console.log(lista);
    
    localStorage.setItem("array",JSON.stringify(lista))
    
    let local=localStorage.getItem("array")

    let traducido=JSON.parse(local)

    console.log(traducido);
} else {
    let lista=JSON.parse(localStorage.getItem("array"))
    console.log(lista); 
     lista.push(datos)
     console.log(lista);
    localStorage.setItem("array",JSON.stringify(lista))
}}

