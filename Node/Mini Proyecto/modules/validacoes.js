const validarUsuario = (nome, idade) => {
    if (!nome || nome.length < 3) return { valido: false, msg: "Nome muito curto!" };
    if (isNaN(idade) || idade <= 0) return { valido: false, msg: "Idade inválida!" };
    return { valido: true };
};

module.exports = { validarUsuario };