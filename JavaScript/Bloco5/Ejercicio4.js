const readlineSync = require('readline-sync'); 
console.log("\n--- 4. Simulador de Login ---");
const SENHA_FIXA = "1234";
let senhaCorreta = false;

while (!senhaCorreta) {
    let senhaDigitada = readlineSync.question("Digite a senha: ");

    if (senhaDigitada === SENHA_FIXA) {
        console.log("Acesso permitido.");
        senhaCorreta = true;
    } else {
        console.log("Senha incorreta.");
    }
}