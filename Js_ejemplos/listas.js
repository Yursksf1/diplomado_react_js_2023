let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('myArray', myArray)

console.log('la logitud es: ', myArray.length)

// agregar elemento 
console.log('voy a agregar el eleento 10 al final de la lista')
myArray.push(10)
console.log('myArray', myArray)
console.log('la logitud es: ', myArray.length)

console.log(myArray.includes(1))
console.log(myArray.includes(11))

console.log(myArray.length == 11)


let myNewArray = ["Manzana", "Pera", "limon"];
console.log(myNewArray[1])

myNewArray.sort()
console.log('lista ordenada: ', myNewArray )


// reemplazar elementos en una posicion especifica.
var fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements, remove 1: 
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log('fruits: ', fruits )


// a la lista de frutas, reemplazar "orange" por "sandia"

// 0) validar que la palabra orange este dentro de la lista
// 1) buscar la palabra orange dentro de la lista, para esto usamos indexof
// 2) reemplazamos la palabra con splice

let frutaBuscar = "Orange"

let validacion = fruits.includes(frutaBuscar)
if (validacion) {
    let posicionFruta = fruits.indexOf(frutaBuscar)
    console.log('posicionFruta', posicionFruta)
    // fruits.splice(posicionFruta, 1, "Sandia");
    fruits.splice(posicionFruta, 0, "Sandia");
}

console.log('fruits', fruits)