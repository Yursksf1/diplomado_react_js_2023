LIM_ADULTO_EDAD = 18
LIM_ADULTO_MAYOR_EDAD = 60

edad = 10

console.log('==> Inicio del programa')

if (edad>=LIM_ADULTO_EDAD && edad<=LIM_ADULTO_MAYOR_EDAD) {
    console.log('esta persona es un adulto')
} else if (edad>LIM_ADULTO_MAYOR_EDAD) {
    console.log('esta persona es un adulto mayor')
} else if (edad<LIM_ADULTO_EDAD) {
    console.log('esta persona es un menor de edad')
} 
else {
    console.log('esta persona es un menor de edad')
}

console.log('==> Fin del programa')


//  con base al codigo anterior, definir un programa para determinar el grupo que pertenece las personas segun su edad
// Bebes : 0 - 3
// Niños : 3 - 11
// Adolecentes: 11 - 18
// Adultos: 18 - 60
// Adultos mayores: 60 o más