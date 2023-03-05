//condicional if
// Bebes : (0 - 3]
// Niños : (3 - 11]
// Adolecentes: (11 - 18]
// Adultos: (18 - 60]
// Adultos mayores: (60 o más]

let edad = prompt('Digite su edad');

//edad = 1
bebes=3
niños=11
adolescente=18
adultos=60

console.log('==> Inicio del programa')

if (edad<=3) {
    
    alert('su edad es de: '+ edad + ' años, eres un bebe¡');
    //console.log('esta persona es un Bebe tiene',edad,'años')
 

}else if (edad>bebes && edad<=niños) {
    alert('su edad es de: '+ edad + ' años, eres un niño¡');
    //console.log('esta persona es un niño tiene',edad, 'años')

} else if (edad>niños && edad<=adolescente) {
    alert('su edad es de: '+ edad + ' años, eres un adolescente¡');
    //console.log('esta persona es un adolescente tiene',edad, 'años')

} else if (edad>adolescente && edad<=adultos) {
    alert('su edad es de: '+ edad + ' años, eres un adulto¡');
    //console.log('esta persona es un adulto tiene',edad, 'años')
} 
else {
    alert('su edad es de: '+ edad + ' años, eres un adulto mayor¡');
    //console.log('esta persona es un adulto mayor tiene',edad, 'años')
}

console.log('==> Fin del programa')