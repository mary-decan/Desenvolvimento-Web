const readline = require('readline-sync');
/**
 * Encontra o maior e o menor valor em um vetor de números.
 * @param {number[]} vetor - Vetor de números.
 * @returns {{maior: number, menor: number}|{maior: undefined, menor: undefined}} Objeto com o maior e o menor valor, ou undefined se vazio.
 */
function encontrarMinMax(vetor) {
    if (vetor.length === 0) {
        return { maior: undefined, menor: undefined };
    }

    // Inicializa o maior e o menor com o primeiro elemento do vetor
    let menor = vetor[0];
    let maior = vetor[0];

    // Percorre o resto do vetor (a partir do índice 1)
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }
    
    // Retorna um objeto com os resultados
    return { maior: maior, menor: menor };
}

console.log("\n--- 9.2 Encontrando o Maior e o Menor Valor ---");

// Cria um vetor de 5 números aleatórios para o teste
let vetorAleatorio = [];
for(let i = 0; i < 5; i++) {
    vetorAleatorio.push(gerarNumeroAleatorio(100));
}

let minMax = encontrarMinMax(vetorAleatorio);
console.log(`Vetor: [${vetorAleatorio}]`);
console.log(`Resultado: { Maior: ${minMax.maior}, Menor: ${minMax.menor} }`);