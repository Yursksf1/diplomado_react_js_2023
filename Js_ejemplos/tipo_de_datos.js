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
// El Banco Bancolombia ofrece un vehiculo de inversion llamado, CDT que es una inversion a n meses
// segun se puedan acomodar los inversionistas, 
// Tiene una tasa del 12 % anual 
// si tenemos un capital de 10'000.000 de pesos 
// y queremos invertir el 50% de nuestros ahorros a un plazo fijo, 3 años
// cuanto serian las ganancias si se negociara la inversion con interes Simple?
// cuanto serian las ganancias si se negociara la inversion con interes Compuesto?

// cual es una inversion mas rentable? y porque? 


// Ejercicio: 
// El Banco Bancolombia ofrece prestamos a sus clientes 
// Tiene una tasa de 3% mensual 
// si realizmos una compra de un televicion en oferta por un valor de 3'500.000 de pesos,
// con un descuento del 20% pagando con Tc Bancolombia Visa... 
// pero diferimos la deuda a 12 meses 
// cuanto sera el gasto total de la compra? 
// economicamente es rentable realizar la compra?
// en cuantos meses se puede comprar un Tv con las mismas condiciones ahorrando sin usar el credito?

