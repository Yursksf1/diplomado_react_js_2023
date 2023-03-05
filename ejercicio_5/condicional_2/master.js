//ejercicio
//100 - 90 Execelente
//89 - 70 Sobresaliente
//69 - 50 Aceptable
//49 - 30 Insuficiente
//30 - 0 Deficiente

//un alumno saca los siguientes resultados en sus examenes:
Examen1= 10 
Examen2= 20 
Examen3= 50

resultado= (Examen1+Examen2+Examen3)/3
console.log('su nota final es:',resultado);

if (resultado<=30) {
    alert('su calificacion es Deficiente: ' + resultado + '');

}  else if (resultado>30 && resultado<=49) {
    alert('su calificacion es Insuficiente: ' + resultado + '');
    
}  else if (resultado>49 && resultado<=69) {
    alert('su calificacion es Aceptable: ' + resultado + '');

}  else if (resultado>69 && resultado<=89) {
    alert('su calificacion es Sobresaliente: ' + resultado + '');

}  else if (resultado>89 && resultado<=100) {
    alert('su calificacion es Excelente: ' + resultado + '');   
}    