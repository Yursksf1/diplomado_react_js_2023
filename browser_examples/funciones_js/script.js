
// Definicion de funciones en Js 

console.log('init')
console.log('mensaje 2')
console.log('mensaje 3')


function Saludar(nombre=null) {
    // your code is here
    mensaje = `Hola a todos!`

    if (nombre) {
        mensaje = `Hola a ${nombre}!`
    }

    console.log(mensaje)

    document.write(`${mensaje} <br>`);

}


Saludar()
Saludar("Yurley")
Saludar("Camilo")

Saludar()
Saludar("Kate")
Saludar("Yemmy")

Saludar()
Saludar("Dany")
Saludar("Lady")