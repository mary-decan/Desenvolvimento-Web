const readline = require('readline-sync');
console.log("\n--- 3. Conversão de Milhas para Quilômetros ---");
let entradaMilhas = readline.question("Digite uma distancia em milhas: ");
let milhas = parseFloat(entradaMilhas);
const FATOR_CONVERSAO = 1.60934;

if (!isNaN(milhas)) {
    let quilometros = milhas * FATOR_CONVERSAO; 
    console.log(`${milhas} milhas equivalem a ${quilometros.toFixed(3)} quilometros.`);
} else {
    console.log(`Entrada invalida. Digite uma distancia valida em milhas.`);
}