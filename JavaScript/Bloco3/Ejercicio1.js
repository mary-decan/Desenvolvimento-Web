const entradaDobro = prompt("1. Escribe un número entero para calcular el doble:");
const numeroDobro = parseInt(entradaDobro);

if (!isNaN(numeroDobro)) {
    const resultadoDobro = numeroDobro * 2;
    console.log(`\n--- 1. Cálculo del Doble ---`);
    console.log(`El doble de ${numeroDobro} es: ${resultadoDobro}`);
} else {
    console.log(`\n--- 1. Cálculo del Doble ---`);
    console.log("Entrada no válida. Por favor, escribe un número entero válido.");
}
