
const nome = process.argv[2];
const classe = process.argv[3];
const nivel = Number(process.argv[4]);


if (!nome || !classe || isNaN(nivel)) {
    console.log("--------------------------------------------------");
    console.log("Erro: Preencha todos os dados corretamente!");
    console.log("Exemplo: node agente.js Sara Hacker 15");
    console.log("--------------------------------------------------");
} else {
    // Lógica para determinar o Rank baseado no nível
    let rank = "";

    if (nivel <= 10) {
        rank = "Recruta";
    } else if (nivel <= 20) {
        rank = "Investigador";
    } else {
        rank = "Especialista";
    }

    // Exibição da Ficha Formatada
    console.log("=====================================");
    console.log("      CADASTRO DE AGENTE            ");
    console.log("=====================================");
    console.log(` Nome:   ${nome}`);
    console.log(` Classe: ${classe}`);
    console.log(` Nível:  ${nivel}`);
    console.log(` Rank:   ${rank}`);
    console.log("=====================================");
}