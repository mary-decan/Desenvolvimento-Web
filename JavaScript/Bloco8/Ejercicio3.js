const readline = require('readline-sync');
console.log("\n--- 8.3 Função de Busca de Produto ---");

/**
 * @param {string} nomeBuscado 
 * @returns {Object|null}
 */
function buscarProduto(nomeBuscado) {
    let produtoEncontrado = produtos.find(
        produto => produto.nome.toLowerCase() === nomeBuscado.toLowerCase()
    );
    
    
    return produtoEncontrado || null; 
}


let nomeBusca = readline.question("Digite o nome de um produto para buscar (ex: Smartphone X): ");
let resultadoBusca = buscarProduto(nomeBusca);

console.log(`Buscando por: "${nomeBusca}"`);
if (resultadoBusca) {
    console.log("✅ Produto encontrado:");
    console.log(resultadoBusca);
} else {
    console.log("❌ Produto não encontrado.");
}