const nome = process.argv[2];

if (!nome) {
    console.log("-----------------------------------------");
    console.log("Por favor, informe um nome!");
    console.log("Exemplo: node saudacao.js Maria");
    console.log("-----------------------------------------");
} else {
    console.log("-----------------------------------------");
    console.log(`Olá, ${nome}!`);
    console.log("Seja bem-vindo(a) ao sistema.");
    console.log("-----------------------------------------");
}