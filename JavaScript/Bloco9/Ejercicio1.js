const readline = require('readline-sync');
/**
 * Calcula a média aritmética de um vetor de números (notas).
 * @param {number[]} notas - Vetor contendo as notas a serem somadas.
 * @returns {number} A média das notas.
 */
function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }

    return soma / notas.length;
}

console.log("--- 9.1 Cálculo da Média de Notas ---");
let notasAluno = [7.5, 8.0, 6.5, 9.0];
let mediaFinal = calcularMedia(notasAluno);
console.log(`Notas: [${notasAluno}]`);
console.log(`A média das notas é: ${mediaFinal.toFixed(2)}`);