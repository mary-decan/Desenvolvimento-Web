const readline = require('readline-sync');
function calcularPotencia(base, expoente) {
    let resultado = 1;
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }
    return resultado;
}

console.log("\n--- 7.3 Função para Calcular a Potência ---");
let base = parseFloat(readline.question("Digite a base: "));
let expoente = parseInt(readline.question("Digite o expoente (inteiro e nao negativo): "));

if (!isNaN(base) && !isNaN(expoente) && expoente >= 0) {
    let resultado = calcularPotencia(base, expoente);
    console.log(`Resultado de ${base} elevado a ${expoente}: ${resultado}`);
} else {
    console.log("Entradas inválidas. Certifique-se de que a base é um número e o expoente é um inteiro não negativo.");
}