const autorSistema = "Agente Especial";

const boasVindas = (nome) => {
    return `Olá, ${nome}! Bem-vindo ao centro de comando.`;
};

const despedida = (nome) => {
    return `Até logo, ${nome}. A conexão foi encerrada com segurança.`;
};


module.exports = {
    boasVindas,
    despedida,
    autorSistema
};