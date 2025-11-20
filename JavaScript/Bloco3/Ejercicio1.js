const readlineSync = require('readline-sync'); 

const entradaDobro = readlineSync.question("1. Digite um número inteiro para calcularmos o dobro: ");

const numeroDobro = parseInt(entradaDobro);

if (!isNaN(numeroDobro)) {
    const resultadoDobro = numeroDobro * 2;
    console.log(`\n--- 1. Cálculo do Dobro ---`);
    console.log(`O dobro de ${numeroDobro} é: ${resultadoDobro}`);
} else {
    console.log(`\n--- 1. Cálculo do Dobro ---`);
    console.log("Entrada inválida. Por favor, digite um número inteiro válido.");
}