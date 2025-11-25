const readlineSync = require('readline-sync');
console.log("\n--- 5. Jogo da Adivinhação ---");

const NUMERO_SECRETO = Math.floor(Math.random() * 10) + 1;
let palpite = 0;
let tentativas = 0;

console.log("Tente adivinhar o número entre 1 e 10...");

while (palpite !== NUMERO_SECRETO) {
  
    let entrada = readlineSync.question("Seu palpite: ");
    palpite = parseInt(entrada);
    tentativas++;

    if (isNaN(palpite)) {
        tentativas--;
        console.log("Entrada inválida. Tente novamente.");
        continue;
    }

    if (palpite > NUMERO_SECRETO) {
        console.log("Dica: Menor!");
    } else if (palpite < NUMERO_SECRETO) {
        console.log("Dica: Maior!");
    } else {
        console.log(`\n🎉 Você acertou o número ${NUMERO_SECRETO} em ${tentativas} tentativas!`);
    }
}