let entradaMilhas = prompt("Digite uma distância em milhas:");
let milhas = parseFloat(entradaMilhas);
const FATOR_CONVERSAO = 1.60934;


if (!isNaN(milhas)) {
    let quilometros = milhas * FATOR_CONVERSAO;
    console.log(`${milhas} milhas equivalem a ${quilometros.toFixed(3)} quilômetros.`);
} else {
    console.log(`Entrada inválida. Por favor, digite uma distância válida em milhas.`);
}