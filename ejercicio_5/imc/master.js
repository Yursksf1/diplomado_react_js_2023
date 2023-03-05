console.log('Inicio imc==>')
peso = 80           // kl
altura = 1.68        // m

//imc = peso / (altura*altura)
imc = peso / Math.pow((altura),2)
console.log('IMC='+imc)

if (imc<18.5) {
    console.log("Su IMC es: "+imc+ " Insuficiencia Ponderal");

} else if (imc >= 18.5 && imc <=24.9) {
    console.log("Su IMC es: "+imc+ " Intervalo Normal");
    
} else if (imc >= 25 && imc <=29.9) {
    console.log("Su IMC es: "+imc+ " Sobre Peso"); 
    
}
console.log('Final imc==>')
console.log('')


// Tasas de interes
console.log('Inicio tasas==>')
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


// operaciones aritmeticas 

// calculo de interes simple
// I = P * i * N
// F = P + I

// F --> Capital Final
// I --> Interes Futuro
// P --> Capital Inicial
// i --> Tasa de Interes
// N --> Tiempo


// calculo de interes compuesto
// F = P (1+i)^N
// F --> Capital Final
// P --> Capital Inicial
// i --> Tasa de Interes
// N --> Tiempo



// Ejercicio: 
// El Banco Bancolombia ofrece un vehiculo de inversion llamado, CDT que es una inversion a n años 
// segun se puedan acomodar los inversionistas, 
// Tiene una tasa del 12 % anual --> 12/100 --> 0.12
// si tenemos un capital de 10'000.000 de pesos 
// y queremos invertir el 50% de nuestros ahorros a un plazo fijo, 3 años
// cuanto serian las ganancias si se negociara la inversion con interes Simple?
// cuanto serian las ganancias si se negociara la inversion con interes Compuesto?

// cual es una inversion mas rentable? y porque? 

const montoAhorro = 10000000                // ahorros en pesos
const invesionSimple = montoAhorro / 2      // inversion en interes simple
const invesionCompuesta = montoAhorro / 2   // inversion en interes compuesto
const tiempo = 3                            // años 
const tasaInteres = 0.12                    // tasa de interes

let gananciaInversionSimple = 0             // Resultado para la inversion con interes simple
let gananciaInversionCompuesta = 0          // Resultado para la inversion con interes compuesto

console.log('INICIO')
console.log('...Calculando Interes Simple... ')
// cacluar el interes generado
// I = P * i * N
const interesGenerado = invesionSimple * tasaInteres * tiempo
console.log('interesGenerado', interesGenerado)

// cacluar el capital final
// F = P + I
gananciaInversionSimple = invesionSimple + interesGenerado
console.log('gananciaInversionSimple', gananciaInversionSimple)


console.log('...Calculando Interes Comuesto... ')
// calculo de interes compuesto
// F = P (1+i)^N
gananciaInversionCompuesta = invesionCompuesta * Math.pow((1 + tasaInteres), tiempo)
console.log('gananciaInversionCompuesta', gananciaInversionCompuesta)

console.log('FIN')



// Ejercicio: 
// El Banco Bancolombia ofrece prestamos a sus clientes 
// Tiene una tasa de 3% mensual 
// si realizmos una compra de un television en oferta por un valor de 3'500.000 de pesos,
// con un descuento del 20% pagando con Tc Bancolombia Visa... 
// pero diferimos la deuda a 12 meses 
// cuanto sera el gasto total de la compra? 
// economicamente es rentable realizar la compra?
// en cuantos meses se puede comprar un Tv con las mismas condiciones ahorrando sin usar el credito?

console.log('INICIO')
const valorProducto = 3500000                                   // Valor del producto sin descuento
const descuentoPorcentual = 20                                  // descuento promocion 
const descuentoFinal = valorProducto * (descuentoPorcentual/100)
// const valorPrestamo = valorProducto * (1 - (descuentoPorcentual/100))
const valorPrestamo = valorProducto - descuentoFinal
const tiempoMeses = 12
const tasaInteresMensual = 3

let saldoDeuda = valorPrestamo
let gastoTotalCompra = 0 

// calculando el gasto 
let saldoDiferido = valorPrestamo/tiempoMeses
console.log('valorPrestamo con el descuento realizado', valorPrestamo)
console.log('saldoDiferido', saldoDiferido)

// // mes 1
// let interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// let valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 2
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)

// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)
let totalInteresPagado = 0
let totalahorro = 0

for (let index = 0; index < tiempoMeses; index++) {
    // staments operacion que estoy copiando n veses
    
    interesMensual = saldoDeuda*tasaInteresMensual/100
    console.log('saldoDiferido', saldoDiferido)
    console.log('interesMensual', interesMensual)
    totalInteresPagado = totalInteresPagado + interesMensual
    

    valorCuota = saldoDiferido + interesMensual
    console.log('valorCuota', valorCuota)
   
    saldoDeuda = saldoDeuda - saldoDiferido
    console.log('saldoDeuda', saldoDeuda)
    console.log("")
}
console.log(`Me hicieron un descuento de: ${descuentoFinal} por la compra del T.V`)
console.log(`Al final de este prestamos pague: ${totalInteresPagado} de intereses`)

console.log('FIN')

console.log('Final tasas==>')
console.log('')

//ciclo while
// Haciendo uso de la estructura ciclica while 
// definir un programa que me ayude a calcualar la cantidad de meses que debo dejar una inversion
// monto inicial: 50'000.000
// tasa de interes: 3% M.V
// monto final: 100.000.000
// tiempo ?

console.log('==>Inicio: Cuantos meses necesito para alcanzar a ahorrar 100m si elmonto inicial es de 50m a una tasa interes de 3%')
// declaro variables
let montoInicial = 50000000;
let montoFinal = 100000000;
let tasaInteres1 = 0.03;
let saldoActual = montoInicial;
let tiempoTotal = 0;
let interesesTotal = 0;

while (saldoActual < montoFinal) {
    tiempoTotal ++;
    saldoActual += saldoActual * tasaInteres1;
    console.log(`saldo por mes ${tiempoTotal} suman ${saldoActual}`);
    
}
console.log(``)
console.log(`Se requiere ${tiempoTotal} meses para alcanzar ${montoFinal}`);
console.log(`Total ahorro ${saldoActual}`)
console.log(`total intereses ${saldoActual - montoInicial}`)

console.log('==> fin del ejercicio tasas')