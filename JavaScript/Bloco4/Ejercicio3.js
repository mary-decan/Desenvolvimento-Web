const readline = require('readline-sync');

console.log("\n--- 3. Verificação de Aprovação ---");
const TOTAL_AULAS = 100;
const LIMITE_FALTAS = 0.25 * TOTAL_AULAS; 
const NOTA_MINIMA = 7.0;

let entradaNota = readline.question("Digite a nota final do aluno: ");
let entradaFaltas = readline.question("Digite o numero de faltas: ");

let nota = parseFloat(entradaNota);
let faltas = parseInt(entradaFaltas);

if (isNaN(nota) || isNaN(faltas)) {
    console.log("Entradas invalidas para nota ou faltas.");
} else {
    if (faltas > LIMITE_FALTAS) {
        console.log(`REPROVADO POR FALTAS. Limite maximo: ${LIMITE_FALTAS}. Faltas: ${faltas}.`);
    } else if (nota < NOTA_MINIMA) {
        console.log(`REPROVADO POR NOTA. Nota minima: ${NOTA_MINIMA}. Nota: ${nota}.`);
    } else {
        console.log(`APROVADO! Nota: ${nota}, Faltas: ${faltas}.`);
    }
}