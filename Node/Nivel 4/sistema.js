
const comando = process.argv[2] ? process.argv[2].toLowerCase() : "";

console.log("-----------------------------------------");

if (comando === "atacar") {
    console.log("⚔️ Você avançou contra o inimigo!");
} else if (comando === "defender") {
    console.log("🛡️ Você ergueu seu escudo e se preparou.");
} else if (comando === "fugir") {
    console.log("🏃 Você correu para longe do perigo!");
} else {
    // Caso o comando não seja nenhum dos acima
    console.log("❓ Comando desconhecido.");
    console.log("Use: atacar, defender ou fugir.");
}

console.log("-----------------------------------------");