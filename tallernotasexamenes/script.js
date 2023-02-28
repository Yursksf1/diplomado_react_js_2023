
let examen1=81
let examen2=50
let examen3=80

let examen=(examen1+examen2+examen3)/3

lim_exce=100
lim_ma_exce=90
lim_sobre=89
lim_ma_sobre=70
lim_acep=69
lim_ma_acep=50
lim_insu=49
lim_ma_insu=30

console.log('==> Inicio del programa')

if (examen<=lim_exce && examen>=lim_ma_exce) {
    console.log('excelente'+ 'la nota final:'+examen)
} else if (examen<=lim_sobre && examen>=lim_ma_sobre) {
    console.log('sobresaliente'+ 'la nota final:'+examen)
} else if (examen<=lim_acep && examen>=lim_ma_acep) {
    console.log('aceptable'+ 'la nota final:'+examen)
} 
else if (examen<=lim_insu && examen>=lim_ma_insu) {
    console.log('insuficiente'+ 'la nota final:'+examen)
}
else {
    console.log('deficiente'+ 'la nota final:'+examen)
}

console.log('==> Fin del programa')
