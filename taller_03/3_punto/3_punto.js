// Valores de entrada
const valorInmueble = 230000000;
const gastoEscrituracion = 8000000;
const tasaInteresPrestamo = 0.015;
const valorAhorrado = 50000000;
const ahorroCesantias = 70000000;

// 1. Pagando en 20 años
const plazoPrestamo = 20 * 12; // 240 meses
const valorPrestamo =
	valorInmueble + gastoEscrituracion - valorAhorrado - ahorroCesantias;
const cuota =
	(valorPrestamo * tasaInteresPrestamo) /
	(1 - Math.pow(1 + tasaInteresPrestamo, -plazoPrestamo));
document.getElementById(
	"cuotaMensaual",
).innerHTML = `El valor de la cuota mensual es de: ${cuota.toFixed(2)}`;

const totalPagado = cuota * plazoPrestamo;
document.getElementById(
	"totalPagado",
).innerHTML = `El total pagado al final del préstamo es de: ${totalPagado.toFixed(
	2,
)}`;

const totalIntereses = totalPagado - valorPrestamo;
document.getElementById(
	"totalIntereses",
).innerHTML = `El valor total de intereses pagados es de: ${totalIntereses.toFixed(
	2,
)}`;

// 2. Negociando haciendo aportes de 5 millones
const aporteMensual = 5000000;
let mes = 0;
let valorPrestamoActual = valorPrestamo;
while (valorPrestamoActual > 0) {
	mes++;
	const interesMensual = valorPrestamoActual * tasaInteresPrestamo;
	const abono =
		aporteMensual > valorPrestamoActual
			? valorPrestamoActual + interesMensual
			: aporteMensual + interesMensual;
	valorPrestamoActual -= abono - interesMensual;
}

const totalPagado2 = mes * aporteMensual;
document.getElementById(
	"cantMeses",
).innerHTML = `El préstamo se paga en ${mes} meses`;

document.getElementById(
	"totalPagadoAportes",
).innerHTML = `El total pagado al final del préstamo es de: ${totalPagado2.toFixed(
	2,
)}`;

const totalIntereses2 = totalPagado2 - valorPrestamo;
document.getElementById(
	"totalInteresesAportes",
).innerHTML = `El valor total de intereses pagados es de: ${totalIntereses2.toFixed(
	2,
)}`;
