const nivel = Number(process.argv[2]);

if (isNaN(nivel) || nivel <= 0) {
    console.log("-----------------------------------------");
    console.log("Por favor, informe um nível válido (número maior que 0).");
    console.log("-----------------------------------------");
} else {
    console.log("-----------------------------------------");
    console.log(`Nível do Personagem: ${nivel}`);

 
    if (nivel <= 10) {
        console.log("Classificação: Iniciante");
    } else if (nivel <= 30) {
        console.log("Classificação: Intermediário");
    } else {
        console.log("Classificação: Veterano");
    }
    
    console.log("-----------------------------------------");
}