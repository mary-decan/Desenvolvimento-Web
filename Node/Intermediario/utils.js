const eNumero = (n1, n2) => {
    return typeof n1 === 'number' && typeof n2 === 'number' && !isNaN(n1) && !isNaN(n2);
};

module.exports = { eNumero };