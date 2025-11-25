const readline = require('readline-sync');
console.log("\n--- 4. Classificação de Categoria de Natação ---");
let entradaIdade = readline.question("Digite a idade do nadador: ");
let idade = parseInt(entradaIdade);

if (isNaN(idade) || idade < 0) {
    console.log("Idade invalida.");
} else {
    if (idade >= 5 && idade <= 7) {
        console.log("Categoria: Infantil A");
    } else if (idade >= 8 && idade <= 10) {
        console.log("Categoria: Infantil B");
    } else if (idade >= 11 && idade <= 13) {
        console.log("Categoria: Juvenil A");
    } else if (idade >= 14 && idade <= 17) {
        console.log("Categoria: Juvenil B");
    } else if (idade >= 18) {
        console.log("Categoria: Adulto");
    } else { 
        console.log("Nao ha categoria para esta idade (menor que 5 anos).");
    }
}