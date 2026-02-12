const v = require('./validacoes');

const testes = [
    { nome: "Al", idade: 25 },    
    { nome: "Sara", idade: -5 },  
    { nome: "Bob", idade: 18 }    
];

console.log("===== Sistema de Validação =====");

testes.forEach((pessoa, index) => {
    const nomeValido = v.validarNome(pessoa.nome);
    const idadeValida = v.validarIdade(pessoa.idade);

    console.log(`\nTeste #${index + 1}:`);
    console.log(`Nome: ${pessoa.nome} -> ${nomeValido ? "✅ OK" : "❌ Erro (mínimo 3 letras)"}`);
    console.log(`Idade: ${pessoa.idade} -> ${idadeValida ? "✅ OK" : "❌ Erro (deve ser maior que 0)"}`);

    if (nomeValido && idadeValida) {
        console.log("STATUS: Agente pronto para cadastro.");
    } else {
        console.log("STATUS: Dados inválidos detectados.");
    }
});

console.log("\n================================");