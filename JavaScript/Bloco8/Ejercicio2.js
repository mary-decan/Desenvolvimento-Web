const readline = require('readline-sync');
console.log("\n--- 8.2 Vetor de Objetos (Produtos) ---");
let produtos = [
    { nome: "Smartphone X", preco: 1899.99, emEstoque: true },
    { nome: "Câmera Mirrorless", preco: 4500.00, emEstoque: true },
    { nome: "Headphone Bluetooth", preco: 350.50, emEstoque: false },
    { nome: "Carregador Portátil", preco: 120.00, emEstoque: true }
];

console.log("Listagem de Produtos:");
for (let produto of produtos) {
    console.log(`Nome: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)}`);
}