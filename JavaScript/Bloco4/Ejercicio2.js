function elevarAoQuadrado() {
    const input = prompt("2. Elevação ao Quadrado:\nDigite um número:");
    const num = parseFloat(input);

    if (isNaN(num)) {
        alert("2. Entrada inválida. Por favor, digite um número.");
        return;
    }

    let resultado;
    if (num > 0) {
        const quadrado = num * num;
        resultado = `2. O número é positivo. O resultado de ${num} ao quadrado é **${quadrado}**.\n`;
    } else if (num < 0) {
        resultado = "2. O número é negativo. **Número inválido** para esta operação.\n";
    } else {
        resultado = "2. O número é zero. O resultado de 0 ao quadrado é **0**.\n";
    }
    alert(resultado);
}

