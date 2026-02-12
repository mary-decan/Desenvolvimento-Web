const operacoes = require('./operacoes');

const n1 = 10;
const n2 = 5;
const n3 = 0; 

console.log("===== Teste de Módulos =====");
console.log(`Números usados: ${n1} e ${n2}`);
console.log("----------------------------");

console.log(`Soma:          ${operacoes.somar(n1, n2)}`);
console.log(`Subtração:     ${operacoes.subtrair(n1, n2)}`);
console.log(`Multiplicação: ${operacoes.multiplicar(n1, n2)}`);
console.log(`Divisão:       ${operacoes.dividir(n1, n2)}`);

console.log("----------------------------");
console.log(`Teste erro (10 / 0): ${operacoes.dividir(n1, n3)}`);
console.log("============================");