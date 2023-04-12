// Cuadrado
const lado1 = 5;
const lado2 = 12;
const perimetroCuadrado1 = lado1 * 4;
const areaCuadrado1 = lado1 * lado1;
const perimetroCuadrado2 = lado2 * 4;
const areaCuadrado2 = lado2 * lado2;

document.getElementById("perimetroCuadrado1").innerHTML = perimetroCuadrado1;
document.getElementById("areaCuadrado1").innerHTML = areaCuadrado1;
document.getElementById("perimetroCuadrado2").innerHTML = perimetroCuadrado2;
document.getElementById("areaCuadrado2").innerHTML = areaCuadrado2;

// Círculo
const radio1 = 5;
const radio2 = 10;
const perimetroCirculo1 = 2 * Math.PI * radio1;
const areaCirculo1 = Math.PI * radio1 * radio1;
const perimetroCirculo2 = 2 * Math.PI * radio2;
const areaCirculo2 = Math.PI * radio2 * radio2;

document.getElementById("perimetroCirculo1").innerHTML = perimetroCirculo1.toFixed(2);
document.getElementById("areaCirculo1").innerHTML = areaCirculo1.toFixed(2);
document.getElementById("perimetroCirculo2").innerHTML = perimetroCirculo2.toFixed(2);
document.getElementById("areaCirculo2").innerHTML = areaCirculo2.toFixed(2);

// Rectángulo
const base1 = 5;
const altura1 = 7;
const base2 = 10;
const altura2 = 6;
const perimetroRectangulo1 = 2 * base1 + 2 * altura1;
const areaRectangulo1 = base1 * altura1;
const perimetroRectangulo2 = 2 * base2 + 2 * altura2;
const areaRectangulo2 = base2 * altura2;

document.getElementById("perimetroRectangulo1").innerHTML = perimetroRectangulo1;
document.getElementById("areaRectangulo1").innerHTML = areaRectangulo1;
document.getElementById("perimetroRectangulo2").innerHTML = perimetroRectangulo2;
document.getElementById("areaRectangulo2").innerHTML = areaRectangulo2;

// Triángulo
const baseTriangulo1 = 5;
const alturaTriangulo1 = 7;
const baseTriangulo2 = 10;
const alturaTriangulo2 = 7;
const perimetroTriangulo1 = baseTriangulo1 * 2 + alturaTriangulo1 * 2;
const areaTriangulo1 = (baseTriangulo1 * alturaTriangulo1) / 2;
const perimetroTriangulo2 = baseTriangulo2 * 2 + alturaTriangulo2 * 2;
const areaTriangulo2 = (baseTriangulo2 * alturaTriangulo2) / 2;

document.getElementById("perimetroTriangulo1").innerHTML = perimetroTriangulo1.toFixed(2);
document.getElementById("areaTriangulo1").innerHTML = areaTriangulo1;
document.getElementById("perimetroTriangulo2").innerHTML = perimetroTriangulo2.toFixed(2);
document.getElementById("areaTriangulo2").innerHTML = areaTriangulo2;