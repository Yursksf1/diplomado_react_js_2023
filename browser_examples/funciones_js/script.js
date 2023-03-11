
// Definicion de funciones en Js 

console.log('init')
console.log('mensaje 2')
console.log('mensaje 3')


function Saludar(nombre=null, languaje="español") {
    // your code is here
    mensaje_base = "Hola a "
    if (languaje == "ingles") {
        mensaje_base = "hello to"
    }
    mensaje = `Hola a todos!`

    if (nombre) {
        mensaje = `${mensaje_base} ${nombre}!`
    }
    console.log(mensaje)
    // document.write(`${mensaje} <br>`);

    return mensaje
}


// Saludar()
// Saludar("Yurley")
// Saludar("Camilo")

// Saludar()
// Saludar("Kate")
// Saludar("Yemmy")

// Saludar()
// Saludar("Dany")
// Saludar("Lady")

let nombres = ["Yurley", "Dany", "Kate"]
for (let index = 0; index < nombres.length; index++) {
    const element = nombres[index];
    mensaje = Saludar(element)
    console.log(mensaje)
    console.log("")
}


Saludar("Kris", "ingles")


function calulateAreaCuadrado(lado) {
    return lado*lado
}

function getAreaCuadrado(lado) {
    console.log("")
    console.log(`Hallar el area de un cuadrado de lado: ${lado}`)
    resultado = calulateAreaCuadrado(lado)
    console.log(`El resultado es: ${resultado}`)

    return resultado
}

console.log(getAreaCuadrado(5))
console.log(getAreaCuadrado(12))

// Ejercicio:
// con base al taller resuelto el sabado, (ejercicio 1 de geometria)
//  definir las funciones para hallar el area y perimetros de las figuras geometricas propuestas. (cuadrdo, rectangulo, circulo)
//  hacer los llamados correspondientes 
//  sugerencia: usar console.log o document.write para mostrar mensajes en consola o en el navegador. 





function init(){
    console.log('some is here')
}

window.onload = (evnt) => {
    init()
};