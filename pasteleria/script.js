// variables
var azucar=3500;
var mantequilla=4500;
var harina=2500;
var huevo=500;
var levadura=1200;
var vainilla=3000;
var chocolate=7000;


var huevosprimerpastel=12;
var huevossegundopastel=6;
var huevostercerpastel=6;

var primerpastel=  harina+(huevosprimerpastel*huevo)+levadura+vainilla+azucar+mantequilla;
var segundopastel= harina+(huevossegundopastel*huevo)+levadura+chocolate+azucar+mantequilla;
var tercerpastel = harina+(huevostercerpastel*huevo)+levadura+chocolate+azucar+mantequilla;

console.log('el valor del primerpastel es:$',primerpastel);
console.log('el valor del segundopastel es:$',segundopastel);
console.log('el valor del segundopastel es:$',tercerpastel);

if (primerpastel<segundopastel&&primerpastel<tercerpastel) {
    console.log('El pastel mas economico es Paste1:$',primerpastel);    

} else if(segundopastel<primerpastel&&segundopastel<tercerpastel) {
    console.log('El pastel mas economico es Paste2:$',segundopastel);

}
 else if(tercerpastel<primerpastel&&tercerpastel<tercerpastel) {
    console.log('El pastel mas economico es Paste2:$',tercerpastel);

} else{
    console.log('Los 2 pasteles tinen igual precio:$',primerpastel);
}
 