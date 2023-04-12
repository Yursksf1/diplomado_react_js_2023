// Crear la lista de ingredientes
const ingredientes = ["Limon", "Aguacate", "Cebolla", "Vinagre"];

// Obtener el elemento HTML donde se imprimirá la lista
const lista = document.getElementById("ingredientes");

let h2 = document.createElement("h2");
h2.textContent = "Imprimir la lista de ingredientes";
lista.appendChild(h2);

// Recorrer la lista de ingredientes y crear un elemento de lista por cada uno
ingredientes.forEach((ingrediente) => {
	const li = document.createElement("li");
	li.textContent = ingrediente;
	lista.appendChild(li);
});

// Agregar "Tomate" y "Aji" a la lista
h2 = document.createElement("h2");
h2.textContent = "Agregar Tomate y Aji a la lista de ingredientes";
lista.appendChild(h2);
ingredientes.push("Tomate", "Aji");

// Recorrer la lista de ingredientes actualizada y agregar un elemento de lista por cada uno
ingredientes.forEach((ingrediente) => {
	const li = document.createElement("li");
	li.textContent = ingrediente;
	lista.appendChild(li);
});

// Ordenar la lista de ingredientes
h2 = document.createElement("h2");
h2.textContent = "Ordenar la lista de ingredientes";
lista.appendChild(h2);
ingredientes.sort();

// Recorrer la lista de ingredientes ordenada y agregar un elemento de lista por cada uno
ingredientes.forEach((ingrediente) => {
	const li = document.createElement("li");
	li.textContent = ingrediente;
	lista.appendChild(li);
});

// Eliminar el elemento "Limon" de la lista de ingredientes
h2 = document.createElement("h2");
h2.textContent = "Eliminar el elemento Limon de la lista de ingredientes";
lista.appendChild(h2);
ingredientes.splice(ingredientes.indexOf("Limon"), 1);

// Recorrer la lista de ingredientes actualizada y agregar un elemento de lista por cada uno
ingredientes.forEach((ingrediente) => {
	const li = document.createElement("li");
	li.textContent = ingrediente;
	lista.appendChild(li);
});

// Reemplazar "Cebolla" por "Cebollita" en la lista de ingredientes
h2 = document.createElement("h2");
h2.textContent = "Reemplazar Cebolla por Cebollita en la lista de ingredientes";
lista.appendChild(h2);
ingredientes[ingredientes.indexOf("Cebolla")] = "Cebollita";

// Recorrer la lista de ingredientes actualizada y agregar un elemento de lista por cada uno
ingredientes.forEach((ingrediente) => {
	const li = document.createElement("li");
	li.textContent = ingrediente;
	lista.appendChild(li);
});

// Imprimir la longitud de la lista de ingredientes
h2 = document.createElement("h2");
h2.textContent = "Longitud de la lista de ingredientes";
lista.appendChild(h2);

const longitud = document.createElement("p");
longitud.textContent = ingredientes.length;
lista.appendChild(longitud);
