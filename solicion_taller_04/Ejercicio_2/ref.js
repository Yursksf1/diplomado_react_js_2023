const numero=document.getElementById("numero")
const mostrar=document.getElementById("mostrar")
const boton=document.getElementById("iniciar") 

function ejecutar(ingresado){
    if(ingresado==0){
        mostrar.innerHTML='FINISH'
    }else{
        mostrar.innerHTML=ingresado
        numero.value=''
        setTimeout(ejecutar,1000,ingresado-1)
    }
}