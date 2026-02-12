const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("-----------------------------------------");
    console.log("Erro: Por favor, informe dois números válidos!");
    console.log("Exemplo: node calc.js 10 5");
    console.log("-----------------------------------------");
} else {
    const soma = num1 + num2;
    const multi = num1 * num2;

    console.log("-----------------------------------------");
    console.log(`Calculando: ${num1} e ${num2}`);
    console.log(`Soma: ${soma}`);
    console.log(`Multiplicação: ${multi}`);
    console.log("-----------------------------------------");
}