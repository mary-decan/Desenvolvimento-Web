const readline = require('readline-sync');
console.log("--- 2. Aumento Percentual ---");

let entradaValor = readline.question("Digite um valor monetario (ex: 100.50): "); 
let valorMonetario = parseFloat(entradaValor);

if (!isNaN(valorMonetario)) {
    let valorAumentado = valorMonetario * 1.1; 
    console.log(`Valor original: R$ ${valorMonetario.toFixed(2)}`);
    console.log(`Valor com +10%: R$ ${valorAumentado.toFixed(2)}`);
} else {
    console.log(`Entrada invalida. Digite um valor monetario valido.`);
}