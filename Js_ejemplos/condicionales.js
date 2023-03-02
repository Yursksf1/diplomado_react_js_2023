// Una estructura condicional permite decidir por cuál alternativa seguirá el flujo del programa dependiendo del resultado de la evaluación de una condición. Para establecer condiciones complejas se utilizan los operadores relacionales y lógicos.

// if (condicion) {
//     accion_1
// } else {
//     accion_2
// }


// ejemplo 
edad = 10 
if (edad > 18 ) {
    console.log("eres mayor de edad puedes votar en estas elecciones 2023 de Colombia\n")
    console.log('>>> Las elecciones regionales de Colombia de 2023 se llevarán a cabo el 29 de octubre de 20231​, con el fin de elegir los cargos de gobernadores para los 32 departamentos, diputados de las Asambleas Departamentales, alcaldes de 1.101 municipios, concejales municipales y ediles de las Juntas Administradoras Locales del territorio nacional.')
    console.log("")
    console.log('no olvides incribir tu CC en la Registraduria')

} else {
    console.log(`eres menor de edad, tienes ${edad} años, no puedes votar  votar en estas elecciones 2023 de Colombia`)
}


