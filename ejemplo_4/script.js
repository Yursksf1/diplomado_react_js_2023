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
let huevosPastel3=4;


let pastel1= harina+(huevosPastel1*huevo)+levadura+vainilla+azucar+mantequilla;
let pastel2= harina+(huevosPastel2*huevo)+levadura+chocolate+azucar+mantequilla;
let pastel3= harina+(huevosPastel3*huevo)+levadura+vainilla+azucar+mantequilla;

console.log('el valor del pastel1 es:',pastel1, 'pesos');
console.log('el valor del pastel2 es:',pastel2, 'pesos');
console.log('el valor del pastel3 es:',pastel3, 'pesos');

if (pastel1<pastel2 && pastel1<pastel3) {
    console.log('El pastel mas economico es Paste1:',pastel1,'pesos');    

} else if(pastel2<pastel1 && pastel2<pastel3) {
    console.log('El pastel mas economico es Paste2:',pastel2,'pesos');

} else if(pastel3<pastel1 && pastel3<pastel2) {
    console.log('El pastel mas economico es Paste3:',pastel3,'pesos');

} else{
    console.log('Los 3 pasteles tienen igual precio:',pastel1, 'pesos');
}

 