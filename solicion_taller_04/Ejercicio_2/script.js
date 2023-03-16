const cambiarMensajeElemento = (id, mensaje) => {
    document.getElementById(id).textContent = mensaje
}

setTimeout(() => {
    cambiarMensajeElemento("mensaje", "reiniciar")
    }, 30*1000
)

contador = 5 

myInterval = setInterval(
    ()=> {
        contador --
        if (contador==0) {
            clearInterval(myInterval)
        }
        cambiarMensajeElemento("timer", contador)
    }
    , 1000);
