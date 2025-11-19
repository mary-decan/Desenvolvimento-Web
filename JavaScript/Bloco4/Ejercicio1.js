const FORMATTER = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });


function classificarNumero() {
    const input = prompt("1. Classificação de Número:\nDigite um número:");
    const num = parseFloat(input);

    if (isNaN(num)) {
        alert("1. Entrada inválida. Por favor, digite um número.");
        return;
    }

    let resultado;
    if (num > 0) {
        resultado = `1. O número ${num} é **positivo**.\n`;
    } else if (num < 0) {
        resultado = `1. O número ${num} é **negativo**.\n`;
    } else {
        resultado = "1. O número é **zero**.\n";
    }
    alert(resultado);
}