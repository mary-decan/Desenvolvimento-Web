const readlineSync = require('readline-sync'); 
console.log("\n--- 3. Simulador de Caixa ---");
let total = 0;
let preco;

do {
 
    let entrada = readlineSync.question("Digite o preco do produto (ou 1 para finalizar): ");
    preco = parseFloat(entrada);


    if (isNaN(preco) || entrada === null) { 
        continue;
    }

    if (preco === 1 && total > 0) {
        break;
    } else if (preco > 0) {
        total += preco;
        console.log(`Total parcial: R$ ${total.toFixed(2)}`);
    } else if (preco === 1 && total === 0) {
         break;
    }

} while (true);

console.log(`\nCompra finalizada! Total: R$ ${total.toFixed(2)}`);