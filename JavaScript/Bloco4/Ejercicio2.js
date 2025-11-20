const readline = require('readline-sync');
console.log("\n--- 2. Elevação ao Quadrado ou Erro ---");
let entrada2 = readline.question("Digite um numero (positivo para calcular o quadrado): ");
let numero2 = parseFloat(entrada2);

if (!isNaN(numero2)) {
    if (numero2 > 0) {
        let quadrado = numero2 * numero2;
        console.log(`O numero ${numero2} elevado ao quadrado e: ${quadrado}`);
    } else {
        console.log("Numero invalido. O numero digitado nao e positivo.");
    }
} else {
    console.log("Entrada invalida.");
}