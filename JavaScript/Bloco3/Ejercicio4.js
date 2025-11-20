let entradaLargura = prompt("Digite a largura do retângulo:");
let entradaAltura = prompt("Digite a altura do retângulo:");

let largura = parseFloat(entradaLargura);
let altura = parseFloat(entradaAltura);

if (!isNaN(largura) && !isNaN(altura)) {
    let perimetro = 2 * (largura + altura);
    console.log(`Retângulo: Largura = ${largura}, Altura = ${altura}`);
    console.log(`O perímetro do retângulo é: ${perimetro}`);
} else {
    console.log(`Uma ou ambas as entradas são inválidas. Por favor, digite números para largura e altura.`);
}