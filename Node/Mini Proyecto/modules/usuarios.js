const arquivos = require('./arquivos');
const logger = require('./logger');

let lista = arquivos.carregarDados();

const adicionar = (nome, idade) => {
    lista.push({ nome, idade });
    arquivos.salvarDados(lista);
    logger.registrar(`Usuário ${nome} cadastrado.`);
};

const listar = () => lista;

const remover = (nome) => {
    const novaLista = lista.filter(u => u.nome.toLowerCase() !== nome.toLowerCase());
    if (novaLista.length < lista.length) {
        lista = novaLista;
        arquivos.salvarDados(lista);
        logger.registrar(`Usuário ${nome} removido.`);
        return true;
    }
    return false;
};

module.exports = { adicionar, listar, remover };