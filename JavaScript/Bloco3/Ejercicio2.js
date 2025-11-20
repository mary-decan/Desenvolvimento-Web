let entradaValor = prompt("Digite um valor monetário (decimal):");
let valorMonetario = parseFloat(entradaValor);

if (!isNaN(valorMonetario)) {
    
    let valorAumentado = valorMonetario * 1.1;
    console.log(`O valor original é: ${valorMonetario}`);
    console.log(`O valor com aumento de 10% é: ${valorAumentado.toFixed(2)}`); 
} else {
    console.log(`Entrada inválida. Por favor, digite um valor monetário válido.`);
}