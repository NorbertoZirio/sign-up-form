//validacion de los nombres
const nombre=document.querySelector('#first-name')

const colorBorde= nombre.style.borderColor

function valitationName(inputValue){
    
    if(inputValue.length>=3 &&  inputValue.length<=15){
        nombre.style.borderColor= "green"
    }else {
        console.log("El nombre debe tener entre 3 y 15 caracteres")
        nombre.style.borderColor= "red"
    }
}

nombre.addEventListener('input', function (e){
    valitationName(e.target.value)
})

nombre.addEventListener('blur', function(){
    nombre.style.borderColor=colorBorde
})

//Validacion del Email
const email=document.querySelector('#email')

const colorBordeEmail= email.style.borderColor

function valitationEmail(inputValue){
    
    if(inputValue.includes("@") &&  inputValue.includes(".") && inputValue.indexOf(".")!=(inputValue.length-1) && inputValue.length>=5){
        email.style.borderColor= "green"
    }else {
        console.log("Formato de correo incorrecto")
        email.style.borderColor= "red"
    }
}

email.addEventListener('input', function (e){
    valitationEmail(e.target.value)
})

email.addEventListener('blur', function(){
    email.style.borderColor=colorBordeEmail
})

//Validacion del numero de telefono

const phoneNumber=document.querySelector('#number')

const colorBordeNumber= phoneNumber.style.borderColor

function valitationNumber(inputValue){
    
    if(inputValue.length==8 &&  Number(inputValue).toString()===inputValue && inputValue[0]=="5"){
        phoneNumber.style.borderColor= "green"
    }else {
        console.log("El nombre debe tener entre 3 y 15 caracteres")
        phoneNumber.style.borderColor= "red"
    }
}

phoneNumber.addEventListener('input', function (e){
    valitationNumber(e.target.value)
})

phoneNumber.addEventListener('blur', function(){
    phoneNumber.style.borderColor=colorBordeNumber
})

//Validacion del apellido
const apellido=document.querySelector('#last-name')

const colorBordeApellido= apellido.style.borderColor

function valitationApellido(inputValue){
    
    if(inputValue.length>=3 &&  inputValue.length<=15){
        apellido.style.borderColor= "green"
    }else {
        console.log("El apellido debe tener entre 3 y 15 caracteres")
        apellido.style.borderColor= "red"
    }
}

apellido.addEventListener('input', function (e){
    valitationApellido(e.target.value)
})

apellido.addEventListener('blur', function(){
    apellido.style.borderColor=colorBordeApellido
})

//Validacion de contrasenia
const password=document.querySelector('#password')
const midle=document.querySelector('#midle')

let div=document.createElement("div")
let prePasword=0

function valitationPassword(inputValue){
    
    if (inputValue.length<8){
        
        div.textContent="Contrasenia muy corta. Debe tener minimo 8 caracteres"
        div.style.cssText='width: 100%; max-width: 100%; color: red; font-size: 13px; margin-top: 5%;'
        midle.appendChild(div)
        password.style.borderColor="red"
        prePasword=inputValue
    }else {
        password.style.borderColor="green"
        midle.removeChild(div)
    }
}

password.addEventListener('input', function (e){
    valitationPassword(e.target.value)
})

apellido.addEventListener('blur', function(){
    midle.removeChild(div)
})


//Validando confirmacion
const confirmacion=document.querySelector('#confirm-password')

const colorBordeConfirmacion= confirmacion.style.borderColor

function valitationConfirmacion(inputValue){
    
    if(inputValue==prePasword){
        confirmacion.style.borderColor= "green"
    }else {
        console.log("La contrasenia no coincide")
        confirmacion.style.borderColor= "red"
    }
}

confirmacion.addEventListener('input', function (e){
    valitationConfirmacion(e.target.value)
})

confirmacion.addEventListener('blur', function(){
    confirmacion.style.borderColor=colorBorde
})
