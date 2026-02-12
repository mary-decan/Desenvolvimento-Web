const listaUsuarios = [];

const criarUsuario = (nome, idade) => {
    const novoUsuario = { nome, idade };
    listaUsuarios.push(novoUsuario);
};


const listarUsuarios = () => {
    return listaUsuarios;
};


const buscarPorNome = (nome) => {
    return listaUsuarios.find(u => u.nome.toLowerCase() === nome.toLowerCase());
};

module.exports = {
    criarUsuario,
    listarUsuarios,
    buscarPorNome
};