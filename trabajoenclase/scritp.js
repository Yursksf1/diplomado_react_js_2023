edad=parseInt(prompt('ingrese la edad:'))

lim_bebe=0
lim_ma_bebe=3
lim_Niños=4
lim_ma_niño=10
lim_adolecente=11
lim_ma_adolecente=18
lim_Adultos=19
lim_ma_Adultos=60
console.log('==> Inicio del programa')

if (edad>=lim_bebe && edad<=lim_ma_bebe) {
    console.log('bebe')
} else if (edad>=lim_Niños && edad<=lim_ma_niño) {
    console.log('esta niño')
} else if (edad>=lim_adolecente && edad<=lim_ma_adolecente) {
    console.log('adolecente')
} 
else if (edad>=lim_Adultos && edad<=lim_ma_Adultos) {
    console.log('adulto')
}
else {
    console.log('es un adulto mayor')
}

//  con base al codigo anterior, definir un programa para determinar el grupo que pertenece las personas segun su edad
// Bebes : 0 - 3
// Niños : 3 - 11
// Adolecentes: 11 - 18
// Adultos: 18 - 60
// Adultos mayores: 60 o más