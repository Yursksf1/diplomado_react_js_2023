// variables
let harina=2500;
let huevo=500;
let levadura=1200;
let vainilla=3000;
let chocolate=7000;
let azucar=3500;
let mantequilla=4500;

let huevosPastel1=12;
let huevosPastel2=6;


let pastel1= harina+(huevosPastel1*huevo)+levadura+vainilla+azucar+mantequilla;
let pastel2= harina+(huevosPastel2*huevo)+levadura+chocolate+azucar+mantequilla;

console.log('el valor del pastel1 es:',pastel1, 'pesos');
console.log('el valor del pastel2 es:',pastel2, 'pesos');

if (pastel1<pastel2) {
    console.log('El pastel mas economico es Paste1:',pastel1,'pesos');    

} else if(pastel1>pastel2) {
    console.log('El pastel mas economico es Paste2:',pastel2,'pesos');

} else{
    console.log('Los 2 pasteles tinen igual precio:',pastel1, 'pesos');
}
 