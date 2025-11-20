const readline = require('readline-sync'); 

console.log("--- 1. Cálculo do Dobro ---");


let entradaDobro = readline.question("1. Digite um numero inteiro para calcularmos o dobro: ");
let numeroInteiro = parseInt(entradaDobro);

if (!isNaN(numeroInteiro)) {
    let dobro = numeroInteiro * 2;
    console.log(`O dobro de ${numeroInteiro} é: ${dobro}`);
} else {
    console.log(`Entrada inválida. Digite um numero inteiro.`);
}