function verificarAprovacao() {
    const notaInput = prompt("3. Verificação de Aprovação:\nDigite a nota final do aluno (ex: 7.5):");
    const faltasInput = prompt("3. Digite o número de faltas (total de 100 aulas):");
    
    const nota = parseFloat(notaInput);
    const faltas = parseInt(faltasInput);
    
    const LIMITE_FALTAS = 25;

    if (isNaN(nota) || isNaN(faltas) || faltas < 0) {
        alert("3. Entrada inválida para nota ou faltas.");
        return;
    }

    let resultado;
    if (faltas > LIMITE_FALTAS) {
        resultado = `3. Situação: **Reprovado por Faltas** (${faltas} faltas > ${LIMITE_FALTAS} limite).\n`;
    } else if (nota >= 7) {
        resultado = `3. Situação: **Aprovado** (Nota ${nota} e Faltas ${faltas}).\n`;
    } else {
        resultado = `3. Situação: **Reprovado por Nota** (Nota ${nota} < 7).\n`;
    }
    alert(resultado);
}