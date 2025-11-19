function calcularImpostoRenda() {
    const salarioInput = prompt("5. Cálculo de Imposto de Renda:\nDigite o salário do funcionário (R$):");
    const salario = parseFloat(salarioInput);

    if (isNaN(salario) || salario < 0) {
        alert("5. Salário inválido.");
        return;
    }

    let imposto_a_pagar = 0;
    let aliquota = 0;

    if (salario <= 1903.98) {
        imposto_a_pagar = 0;
        aliquota = 0;
    } else if (salario <= 2826.65) {
        aliquota = 0.075; 
    
        imposto_a_pagar = salario * aliquota;
    } else if (salario <= 3751.05) {
        aliquota = 0.15;
        imposto_a_pagar = salario * aliquota;
    } else if (salario <= 4664.68) {
        aliquota = 0.225;
        imposto_a_pagar = salario * aliquota;
    } else {
        aliquota = 0.275;
        imposto_a_pagar = salario * aliquota;
    }
    
    alert(
        `5. Salário: ${FORMATTER.format(salario)}\n` +
        `5. Alíquota Aplicada: ${aliquota * 100}%\n` +
        `5. Valor do Imposto de Renda a ser pago: **${FORMATTER.format(imposto_a_pagar)}**`
    );
}



function executarTodasAsTarefas() {
    classificarNumero();
    elevarAoQuadrado();
    verificarAprovacao();
    classificarNatacao();
    calcularImpostoRenda();
}
