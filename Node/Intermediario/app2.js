const bancoDados = require('./usuarios');


bancoDados.criarUsuario("Sara", 25);
bancoDados.criarUsuario("Bob", 30);
bancoDados.criarUsuario("Alice", 22);

console.log("===== LISTA DE USUÁRIOS =====");
const todos = bancoDados.listarUsuarios();

todos.forEach((u, i) => {
    console.log(`${i + 1}. Nome: ${u.nome} | Idade: ${u.idade}`);
});


console.log("\n===== BUSCA DE USUÁRIO =====");
const busca = "Sara";
const encontrado = bancoDados.buscarPorNome(busca);

if (encontrado) {
    console.log(`✅ Usuário encontrado: ${encontrado.nome}, ${encontrado.idade} anos.`);
} else {
    console.log(`❌ Usuário "${busca}" não localizado.`);
}

console.log("=============================");