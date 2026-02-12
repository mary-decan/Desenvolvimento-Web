const operacoes = require('./utils/operacoes');
const { eNumero } = require('./utils/validacoes');


const valor1 = 20;
const valor2 = 4;

console.log("===== CALCULADORA MODULAR =====");


if (eNumero(valor1, valor2)) {
    console.log(`Valores: ${valor1} e ${valor2}`);
    console.log(`Soma:          ${operacoes.somar(valor1, valor2)}`);
    console.log(`Subtração:     ${operacoes.subtrair(valor1, valor2)}`);
    console.log(`Multiplicação: ${operacoes.multiplicar(valor1, valor2)}`);
    console.log(`Divisão:       ${operacoes.dividir(valor1, valor2)}`);
} else {
    console.log("Erro: Um ou ambos os valores não são números válidos.");
}

console.log("===============================");