const validarNome = (nome) => {
    return nome.length >= 3;
};


const validarIdade = (idade) => {
    return idade > 0;
};

module.exports = {
    validarNome,
    validarIdade
};