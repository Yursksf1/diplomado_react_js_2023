// ejercicio 1 cuadrado lado 5
console.log(`Inicio==> Halla perimetro y area de un cuadrado lado 5`)
let lado1 =5;
let perimetro1 = 4 * lado1;
let area1 = (Math.pow(lado1,2));

console.log(`El Perimetro del cuadrado lado ${lado1} es: ${perimetro1}`)
console.log(`El Area del cuadrado lado ${lado1} es: ${area1}`)

console.log(`Fin ==> Halla perimetro y area de un cuadrado lado 5`)
console.log(``)

//ejercicio 2 cuadrado lado 12
console.log(`Inicio==> Halla perimetro y area de un cuadrado lado 12`)
let lado2 =12;
let perimetro2 = 4 * lado2;
let area2 = Math.pow(lado2,2);

console.log(`El Perimetro del cuadrado lado ${lado2} es: ${perimetro2}`)
console.log(`El Area del cuadrado lado ${lado2} es: ${area2}`)

console.log(`Fin ==> Halla perimetro y area de un cuadrado lado 12`)
console.log(``)

//ejercicio 3, circulo radio 5
console.log(`Inicio==> Halla perimetro y area de un circulo radio 5`)
let Radio1 = 5;
let pi = 3.1416;
let diametro1 = 2 * Radio1; 
let perimetror1 = diametro1 * pi;
let arear1 = pi * Math.pow(Radio1,2)

console.log(`El Perimetro del circulo radio ${Radio1} es: ${perimetror1}`)
console.log(`El Area del circulo radio ${Radio1} es: ${arear1}`)

console.log(`Fin ==> Halla perimetro y area de un circulo radio 5`)
console.log(``)

//ejercicio 4, circulo radio 10
console.log(`Inicio==> Halla perimetro y area de un circulo radio 10`)
let Radio2 = 10;
let pi2 = 3.1416;
let diametro2 = 2 * Radio2; 
let perimetror2 = diametro2 * pi2;
let arear2 = pi2 * Math.pow(Radio2,2)

console.log(`El Perimetro del circulo radio ${Radio2} es: ${perimetror2}`)
console.log(`El Area del circulo radio ${Radio2} es: ${arear2}`)

console.log(`Fin ==> Halla perimetro y area de un circulo radio 10`)
console.log(``)

//ejercicio 5, rectangulo base 5, altura 7
console.log(`Inicio==> Halla perimetro y area rectangulo base 5, altura 7`)
let base = 5;
let altura = 7;
let areaRectangulo1 = (base * altura);
let perimetroRetangulo1 = 2 * base + 2 * altura;

console.log(`El Perimetro del rectangulo base ${base} y altura ${altura} es: ${perimetroRetangulo1}`)
console.log(`El Area del rectangulo base ${base} y altura ${altura} es: ${areaRectangulo1}`)

console.log(`Fin ==> Halla perimetro y area rectangulo base 5, altura 7`)
console.log(``)

//ejercicio 6, rectangulo base 10, altura 6
console.log(`Inicio==> Halla perimetro y area rectangulo base 10, altura 6`)
let base2 = 10;
let altura2 = 6;
let areaRectangulo2 = (base2 * altura2);
let perimetroRetangulo2 = 2 * base2 + 2 * altura2;

console.log(`El Perimetro del rectangulo base ${base2} y altura ${altura2} es: ${perimetroRetangulo2}`)
console.log(`El Area del rectangulo base ${base2} y altura ${altura2} es: ${areaRectangulo2}`)

console.log(`Fin ==> Halla perimetro y area rectangulo base 10, altura 6`)
console.log(``)

//ejercicio 7, triangulo base 5, altura 7
console.log(`Inicio==> Halla perimetro y area triangulo base 5, altura 7`)
let base3 = 5;
let altura3 = 7;
let areaTriangulo3 = (base3 * altura3/2);
let perimetroTriangulo3 = 3 * base3;

console.log(`El Perimetro del rectangulo base ${base3} y altura ${altura3} es: ${perimetroTriangulo3}`)
console.log(`El Area del rectangulo base ${base3} y altura ${altura3} es: ${areaTriangulo3}`)

console.log(`Fin ==> Halla perimetro y area triangulo base 5, altura 7`)
console.log(``)

//ejercicio 8, triangulo base 10, altura 7
console.log(`Inicio==> Halla perimetro y area triangulo base 10, altura 7`)
let base4 = 10;
let altura4 = 7;
let areaTriangulo4 = (base4 * altura4/2);
let perimetroTriangulo4 = 3 * base4;

console.log(`El Perimetro del rectangulo base ${base4} y altura ${altura4} es: ${perimetroTriangulo4}`)
console.log(`El Area del rectangulo base ${base4} y altura ${altura4} es: ${areaTriangulo4}`)

console.log(`Fin ==> Halla perimetro y area triangulo base 5, altura 7`)
console.log(``)

// Ejercicio 9 Crear una lista de ingredientes en Javascript con los siguientes elementos:
console.log(`Inicio==> Crear una lista de ingredientes en Javascript`)

let ingredientes = ["Limon", "Aguacate", "Cebolla", "Vinagre"];
console.log(`Mi lista: ${ingredientes}`);
console.log(``);
console.log(`Agrego Tomate y Aji`);
ingredientes.push("tomate", "aji");
console.log(`Mi nueva lista: ${ingredientes}`);
console.log(``);
console.log(`Ordenar Lista`);
ingredientes.sort();
console.log(`Mi lista Ordenada: ${ingredientes}`);
console.log(``);
console.log(`Elimino elemento limon `);
ingredientes.splice(2, 1)
console.log(`Mi nueva lista: ${ingredientes}`);
console.log(``);
console.log(`Reemplazo el elemento Cebolla por Cebollita `);
ingredientes.splice(1, 1, "Cebollita");
console.log(`Mi nueva lista: ${ingredientes}`);
console.log(``);
console.log(`Imprimir longitud de la lista `);
let longitud = ingredientes.length;
console.log(`La longitud es: ${longitud}`);
console.log(``);

console.log(`Fin ==> Crear una lista de ingredientes en Javascript`)
console.log(``)