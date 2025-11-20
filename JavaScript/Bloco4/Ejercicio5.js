const readline = require('readline-sync');
console.log("\n--- 5. Calculo de Imposto de Renda ---");
let entradaSalario = readline.question("Digite o salario do funcionario: ");
let salario = parseFloat(entradaSalario);
let imposto = 0;
let aliquota = 0;

if (isNaN(salario) || salario < 0) {
    console.log("Salario invalido.");
} else {
    if (salario <= 1903.98) {
    } else if (salario <= 2826.65) {
        aliquota = 0.075;
        
        imposto = salario * aliquota;
    } else if (salario <= 3751.05) {
        aliquota = 0.15;
        imposto = salario * aliquota;
    } else if (salario <= 4664.68) {
        aliquota = 0.225;
        imposto = salario * aliquota;
    } else { 
        aliquota = 0.275;
        imposto = salario * aliquota;
    }

    if (imposto === 0) {
        console.log(`Salario: R$ ${salario.toFixed(2)}.`);
        console.log("Isento de Imposto de Renda.");
    } else {
        console.log(`Salario: R$ ${salario.toFixed(2)}.`);
        console.log(`Aliquota aplicada: ${(aliquota * 100).toFixed(1)}%`);
        console.log(`Valor do Imposto a pagar: R$ ${imposto.toFixed(2)}.`);
    }
}