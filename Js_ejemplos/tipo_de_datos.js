//  Para ejecutar estos archivos se recomiendo instalar la extencion code runner

console.log("Asi es la forma de imprimir un mensaje")

//  En Js tenemos diferentes tipos de datos:

// Numericos 

// - Enteros 
edad = 25            // años 
altura = 170         // cm

// - Decimales 
peso = 80.5          // kg

// estos pueden representar datos de interes para nuestros programas. 


// con estos valores podemos realizar operaciones por ejemplo
imc = peso/((altura/100) * (altura/100))
imc = peso/Math.pow((altura/100), 2)


mensaje = "el IMC es de: " + imc
console.log(mensaje)


// Booleanos
banderaTrue = true
banderaFalse = false

// operaciones de tablas de verdad

resultado = (banderaTrue && banderaFalse) || banderaFalse
console.log('resultado', resultado)

// los valores booleanos son muy utilizados en los condicionales estructuras if( bandera ) { // stamentss}


// Ejercicio
// Realizar un programa que ayude a calcular el indice de masa corporal de un paciente a partir de su peso y altura
// en base a el resultado mostrar un mensaje si la persona se encuentra en peso ideal, sobre peso, u obesidad ver tabla referencia
