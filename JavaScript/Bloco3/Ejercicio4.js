const readline = require('readline-sync');
console.log("\n--- 4. Calculo de Perimetro ---");
let entradaLargura = readline.question("Digite a largura do retangulo: ");
let entradaAltura = readline.question("Digite a altura do retangulo: ");

let largura = parseFloat(entradaLargura);
let altura = parseFloat(entradaAltura);

if (!isNaN(largura) && !isNaN(altura)) {
    let perimetro = 2 * (largura + altura); 
    console.log(`Retangulo: Largura = ${largura}, Altura = ${altura}`);
    console.log(`O perimetro e: ${perimetro}`);
} else {
    console.log(`Entrada invalida. Certifique-se de que a largura e a altura sao numeros.`);
}