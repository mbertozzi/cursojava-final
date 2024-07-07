let boton=document.querySelector("header div")

boton.addEventListener("click", function(){

    let lista=JSON.parse(localStorage.getItem("array"))

    lista.pop()
    console.log(lista);

    localStorage.setItem("array",JSON.stringify(lista))

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

})

