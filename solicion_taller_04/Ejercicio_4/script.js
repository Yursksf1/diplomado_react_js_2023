const LISTADO_OBJETOS = [
    'PERRO', 
    'HORMIGA', 
    'SALA', 
    'JARDIN', 
    'PATIO',
    'ARROZ', 
    'PASTEL', 
    'FRUTA',
    'COMPUTADOR', 
    'CELULAR',
    'TABLET'
]

function terminarJuego() {
    cambiarMensajeElemento("mensaje", "Termino el Juego")
}

function intentoFallido() {
    const id = "numero_intentos"
    const intentos = getTextByID(id)
    const incremento = parseInt(intentos) + 1
    cambiarMensajeElemento(id, incremento)
    if (incremento == 10) {
        terminarJuego()
    } 
}

function validarLetraEnPalabra(letra, palabra) {
    let palabraOculta = getTextByID("show_palabra_o")
    if (palabra.includes(letra)) {
        console.log("tengo que mostrar esta letra", letra)
        palabraOculta = palabraOculta + letra
        let nuevaPalabraOculta = OcultarLetras(palabra, palabraOculta)
        cambiarMensajeElemento("show_palabra_o", nuevaPalabraOculta)
    } else {
        intentoFallido()
    }
}

const cambiarMensajeElemento = (id, mensaje) => {
    document.getElementById(id).textContent = mensaje
}

const getTextByID = (id) => {
    return document.getElementById(id).textContent
}

function getNumeroAleatorio(objeto){
    const random = Math.floor((Math.random()*objeto.length))
    return random
}

function getWordRandom(listadoObjetos){
    const numAleatorio = getNumeroAleatorio( listadoObjetos)
    return listadoObjetos[numAleatorio]  
}

function OcultarPalabra(palabra) {
    const palabraArray = palabra.split("")
    console.log('palabraArray', palabraArray)
    let palabraOculta = "" 

    palabraArray.map(
        () => {
            palabraOculta = palabraOculta + " _ "
        }
    )
    return palabraOculta
}


function OcultarLetras(palabra, lista) {
    const palabraArray = palabra.split("")
    console.log('palabraArray', palabraArray)
    let palabraOculta = "" 

    palabraArray.map(
        (letra) => {
            if (lista.includes(letra)) {
                palabraOculta = palabraOculta + " " +letra + " "
            } else {
                palabraOculta = palabraOculta + " _ "
            }
        }
    )
    return palabraOculta
}


let palabraAleatorea = getWordRandom(LISTADO_OBJETOS)
let palabraOculta = OcultarPalabra(palabraAleatorea)

setTimeout(() => {
    terminarJuego()
    }, 3*60*1000
)


cambiarMensajeElemento("show_palabra", palabraAleatorea)
cambiarMensajeElemento("show_palabra_o", palabraOculta)


// X 1) Seleccionar una palabra aleatorea
// X 2) Ocultar los caracteres de la palabra ( cambiamos cada letra por _ )
// X 3) mostar la palabra oculta en el html
// 4) Render botones
// 4.1) 16 botones --> letras que conforman la palabra y el resto deben ser aleatoreas 
// 4.2) cargar los n botones en html
// 4.3) agregar el texto y el value a los botones, accion
// 4.4) obtener letras aleatorias sin repeticion 
// X 5) contador de intentos 
// X 5.1 funcion para aumenta  el contador de intentos en caso de que sea un intento fallido
// 5.2 validar si una letra se encuentra dentro de la palaba seleccion 
// 5.3 funcion que actualice la palabra que se muestra en el html con las letras que ya fueron adivinadas
// 6) agregar un set time que si pasa 3 min se acaba el juego
// 7) agregar una validacion de que si hay mas de 10 intentos fallidos entonces se acaba el juego
