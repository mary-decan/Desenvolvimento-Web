const entradaAumento = prompt("2. Escribe un valor monetario (ej: 50.50) para aplicarle un aumento del 10%:");
const valorBase = parseFloat(entradaAumento);

if (!isNaN(valorBase)) {
    const valorAumentado = valorBase * 1.1;
    console.log(`\n--- 2. Aumento Porcentual ---`);
    console.log(`Valor base: $${valorBase.toFixed(2)}`);
    console.log(`Valor con aumento del 10%: $${valorAumentado.toFixed(2)}`);
} else {
    console.log(`\n--- 2. Aumento Porcentual ---`);
    console.log("Entrada no válida. Por favor, escribe un valor numérico válido.");
}