

let header=document.querySelector("header")


if ((localStorage.getItem("array")===null) || (localStorage.getItem("array")[0].email== "")) {
    header.innerHTML=`<img src="./img/logo2.jpg"  alt="logo">
        <nav>
            <a href="./index.html">Home</a>
            <a href="./category.html?categoria=electronics">Electronica</a>
            <a href="./category.html?categoria=men's clothing">Hombre</a>
            <a href="./category.html?categoria=women's clothing">Mujer</a>
            <a href="./cart.html">Carrito</a>
            <a href="./login.html">Login</a>
            <a href="./register.html">Registro</a>
            <a href="./recover.html">Recuperar Contraseña</a>
        </nav>`
} else {
    let lista=JSON.parse(localStorage.getItem("array"))
console.log(lista);

header.innerHTML=`


<img src="./img/logo2.jpg"  alt="logo">
    <nav>
            <a href="./index.html">Home</a>
            <a href="./category.html?categoria=electronics">Electronica</a>
            <a href="./category.html?categoria=men's clothing">Hombre</a>
            <a href="./category.html?categoria=women's clothing">Mujer</a>
            <a href="./cart.html">Carrito</a>
            <a href="./recover.html">Recuperar Contraseña</a>
    </nav> 
    <div>
            <h1>Bienvenido: ${lista[0].usuario}</h1>
            <a href="#">Logout</a>
        </div>`
}
