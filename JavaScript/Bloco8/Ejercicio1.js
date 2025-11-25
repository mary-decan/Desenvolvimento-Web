const readline = require('readline-sync');
console.log("--- 8.1 Objeto Usuário ---");
let usuario = {
    nome: "Alice Ferreira",
    idade: 28,
    email: "alice.ferreira@exemplo.com",
    cidade: "Rio de Janeiro"
};

console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos.`);
usuario.status = 'ativo';
console.log("Objeto atualizado:", usuario);