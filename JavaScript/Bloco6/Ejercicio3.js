const readline = require('readline-sync');
console.log("\n--- 3. Vetor de Números Aleatórios Únicos ---");

const TAMANHO_VETOR = 10;
const LIMITE_MAXIMO = 100;
let vetorUnicos = [];


while (vetorUnicos.length < TAMANHO_VETOR) {
    let novoNumero = gerarNumeroAleatorio(LIMITE_MAXIMO);

    if (!vetorUnicos.includes(novoNumero)) {
        vetorUnicos.push(novoNumero);
    }
}

console.log(`Vetor final com ${vetorUnicos.length} números únicos:`, vetorUnicos);