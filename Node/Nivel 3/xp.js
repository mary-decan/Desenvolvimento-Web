const nivel = Number(process.argv[2]);


if (isNaN(nivel) || nivel <= 0) {
    console.log("-----------------------------------------");
    console.log("Erro: Por favor, informe um nível válido!");
    console.log("Exemplo: node xp.js 5");
    console.log("-----------------------------------------");
} else {
    // Aplicamos la fórmula: XP = nível * 100
    const xpNecessaria = nivel * 100;

    console.log("-----------------------------------------");
    console.log(`Nível atual: ${nivel}`);
    console.log(`XP necessária para o próximo nível: ${xpNecessaria} XP`);
    console.log("-----------------------------------------");
}