let formulario=document.querySelector("form")

let campoEmail=document.querySelector("#email")

let campoPassword=document.querySelector("#password")


let email=document.querySelector(".emailSpan")

let repetirContraseña=document.querySelector(".RepetirContraseña")

let contraseña=document.querySelector(".contraseña")

let campoRepetirContraseña=document.querySelector("#confirm-password")


console.log(campoPassword.value);

formulario.addEventListener("submit", function(event){
event.preventDefault()

if (campoEmail.value== "") {

    document.querySelector(".repetirContraseñaSpan").style="display:none"
    document.querySelector(".contraseñaSpan2").style="display:none"
    document.querySelector(".contraseñaSpan").style="display:none"
    document.querySelector(".emailSpan").style= "display:none"

    document.querySelector(".emailSpan").style= "display:show"

}else if (campoPassword.value== "") {

    document.querySelector(".repetirContraseñaSpan").style="display:none"
    document.querySelector(".contraseñaSpan2").style="display:none"
    document.querySelector(".contraseñaSpan").style="display:none"
    document.querySelector(".emailSpan").style= "display:none"

    document.querySelector(".contraseñaSpan").style="display:show"
    
}else if (campoPassword.value.length <= 5){

    document.querySelector(".repetirContraseñaSpan").style="display:none"
    document.querySelector(".contraseñaSpan2").style="display:none"
    document.querySelector(".contraseñaSpan").style="display:none"
    document.querySelector(".emailSpan").style= "display:none"

    document.querySelector(".contraseñaSpan2").style="display:show"
}else if (campoPassword.value != campoRepetirContraseña.value ){
    document.querySelector(".repetirContraseñaSpan").style="display:none"
    document.querySelector(".contraseñaSpan2").style="display:none"
    document.querySelector(".contraseñaSpan").style="display:none"
    document.querySelector(".emailSpan").style= "display:none"

    document.querySelector(".repetirContraseñaSpan").style="display:show"

}else {formulario.submit()} 


})
