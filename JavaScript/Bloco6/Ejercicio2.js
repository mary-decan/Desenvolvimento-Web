const readline = require('readline-sync');
console.log("\n--- 2. Verificação de Aprovação por Aluno ---");

const TOTAL_ALUNOS = 5;
const NOTA_MINIMA_APROVACAO = 7;
let notas = [];

for (let i = 0; i < TOTAL_ALUNOS; i++) {
    let entradaNota = readline.question(`Digite a nota do Aluno ${i + 1}: `);
    let nota = parseFloat(entradaNota);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log(`Nota invalida. Usando 0.`);
        nota = 0;
    }

    notas.push(nota);

   
    if (nota >= NOTA_MINIMA_APROVACAO) {
        console.log(`Aluno ${i + 1}: ${nota} -> APROVADO!`);
    } else {
        console.log(`Aluno ${i + 1}: ${nota} -> REPROVADO.`);
    }
}