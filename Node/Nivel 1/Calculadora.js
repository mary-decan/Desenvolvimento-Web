const num1 = 10;
const num2 =5;

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;

console.log("----Resultados das Operações----");
console.log('Numero 1:" ${num1}');
console.log('Numero 2:" ${num2}');
console.log("----------------------------");

console.table({
    "Soma(+)": soma,
    "Subtração(-)": subtracao,
    "Multiplicação(*)": multiplicacao,
    "Divisão(/)": divisao,

});