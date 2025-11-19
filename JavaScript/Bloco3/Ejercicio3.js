const entradaMilhas = prompt("3. Escribe una distancia en millas para convertirla a kilómetros:");
const distanciaMilhas = parseFloat(entradaMilhas);

if (!isNaN(distanciaMilhas)) {
    const factorConversao = 1.60934;
    const distanciaQuilometros = distanciaMilhas * factorConversao;

    console.log(`\n--- 3. Conversión de Millas a Kilómetros ---`);
    console.log(`Distancia en Millas: ${distanciaMilhas.toFixed(2)} mi`);
    console.log(`Distancia en Kilómetros: ${distanciaQuilometros.toFixed(2)} km`);
} else {
    console.log(`\n--- 3. Conversión de Millas a Kilómetros ---`);
    console.log("Entrada no válida. Por favor, escribe una distancia numérica válida.");
}