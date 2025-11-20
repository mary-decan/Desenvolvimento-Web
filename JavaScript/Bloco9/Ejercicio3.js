const readline = require('readline-sync');
/**
 * Conta quantos produtos estão com a propriedade 'emEstoque' definida como true.
 * @param {Object[]} listaProdutos - Vetor de objetos de produtos.
 * @returns {number} O total de produtos em estoque.
 */
function contarEmEstoque(listaProdutos) {
    let contagem = 0;
    // Itera sobre o vetor de objetos
    for (let produto of listaProdutos) {
        // Verifica a propriedade booleana
        if (produto.emEstoque === true) {
            contagem++;
        }
    }
    return contagem;
}

console.log("\n--- 9.3 Contagem de Produtos em Estoque ---");
let totalEmEstoque = contarEmEstoque(produtos);
console.log("Lista de produtos:", produtos.map(p => ({ nome: p.nome, estoque: p.emEstoque })));
console.log(`Total de produtos em estoque: ${totalEmEstoque}`);