let campoEmail=document.querySelector("#email")

let campoPassword=document.querySelector("#password")


let formulario =document.querySelector("form")

formulario.addEventListener("submit" , function (event) {
    event.preventDefault()
    if (campoEmail.value == ""){
        alert("Por favor complete el campo email")
    } else if(campoPassword.value == ""){
        alert("Por favor complete el campo contraseña")
    }else if (campoPassword.value.length <= 5){
        alert("La contraseña debe tener al menos 6 caracteres" )
    }
    else{formulario.submit()}
})
