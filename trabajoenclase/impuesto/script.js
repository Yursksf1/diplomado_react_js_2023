fecha1=Date(prompt('ingrese la fecha:'))
let impuesto=750000

console.log('==> Inicio del programa')

var fecha2= 2023-30-03;
var fecha3= 2023-01-04;
var fecha4= 2023-30-05;
var fecha5= 2023-01-06;
if(new Date(fecha1).getTime<=new Date(fecha2).getTime )
{

    var suma= impuesto-((impuesto*10)/100)
    console.log('el valor final es con el 10%:'+ suma)
}

if(new Date(fecha1).getTime>=new Date(fecha3).getTime || new Date(fecha1).getTime>=new Date(fecha4).getTime)
{

    var suma= impuesto-((impuesto*10)/100)
    console.log('el valor final es con el 5%:'+ suma)
}

if(new Date(fecha1).getTime>=new Date(fecha5).getTime )
{

    var suma= impuesto-((impuesto*3)/100)
    console.log('el valor final es con el 3%:'+ suma)
}

console.log('==> Fin del programa')
