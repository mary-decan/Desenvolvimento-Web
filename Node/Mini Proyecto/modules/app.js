const usuarios = require('./modules/usuarios');
const { validarUsuario } = require('./validacoes');

const acao = process.argv[2]; 
const nome = process.argv[3];
const idade = Number(process.argv[4]);

console.log("=== SISTEMA DE REGISTROS INTERATIVO ===");

switch (acao) {
    case 'cadastrar':
        const validacao = validarUsuario(nome, idade);
        if (validacao.valido) {
            usuarios.adicionar(nome, idade);
            console.log(`✅ ${nome} cadastrado com sucesso!`);
        } else {
            console.log(`❌ Erro: ${validacao.msg}`);
        }
        break;

    case 'listar':
        console.log("Lista de Usuários:");
        usuarios.listar().forEach((u, i) => console.log(`${i+1}. ${u.nome} - ${u.idade} anos`));
        break;

    case 'remover':
        if (usuarios.remover(nome)) {
            console.log(`🗑️ Usuário ${nome} removido.`);
        } else {
            console.log("⚠️ Usuário não encontrado.");
        }
        break;

    default:
        console.log("Comandos: cadastrar [nome] [idade] | listar | remover [nome]");
}