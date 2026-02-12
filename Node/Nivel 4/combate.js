const ataque = Number(process.argv[2]);
const defesa = Number(process.argv[3]);

if (isNaN(ataque) || isNaN(defesa)) {
    console.log("-----------------------------------------");
    console.log("Erro: Informe o valor de ataque e defesa.");
    console.log("Exemplo: node combate.js 50 30");
    console.log("-----------------------------------------");
} else {

    let dano = ataque - defesa;

   
    if (dano < 0) {
        dano = 0;
    }

    console.log("-----------------------------------------");
    console.log(`⚔️ Ataque do Jogador: ${ataque}`);
    console.log(`🛡️ Defesa do Inimigo: ${defesa}`);
    console.log(`💥 Dano causado: ${dano}`);

    if (dano === 0) {
        console.log("O golpe foi defendido completamente!");
    }
    console.log("-----------------------------------------");
}