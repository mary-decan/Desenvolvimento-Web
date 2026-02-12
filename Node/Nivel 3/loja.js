const item = process.argv[2];
const preco = Number(process.argv[3]);
const ouroTotal = Number(process.argv[4]);


if (!item || isNaN(preco) || isNaN(ouroTotal)) {
    console.log("-----------------------------------------");
    console.log("Erro: Informe o item, preço e seu ouro.");
    console.log("Exemplo: node loja.js Espada 50 100");
    console.log("-----------------------------------------");
} else {
    console.log("-----------------------------------------");
    console.log(`Item: ${item} | Preço: ${preco}G | Seu Ouro: ${ouroTotal}G`);

    // Lógica de compra
    if (ouroTotal >= preco) {
        console.log("Resultado: Pode comprar! ✅");
        console.log(`Sobrará: ${ouroTotal - preco}G`);
    } else {
        console.log("Resultado: Não pode comprar! ❌");
        console.log(`Faltam: ${preco - ouroTotal}G`);
    }
    console.log("-----------------------------------------");
}