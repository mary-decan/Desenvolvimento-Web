const entradaLargura = prompt("4. Escribe la anchura del rectángulo:");
const entradaAltura = prompt("4. Escribe la altura del rectángulo:");

const largura = parseFloat(entradaLargura);
const altura = parseFloat(entradaAltura);

if (!isNaN(largura) && !isNaN(altura)) {
    const perimetro = 2 * (largura + altura);

    console.log(`\n--- 4. Cálculo de Perímetro ---`);
    console.log(`Anchura: ${largura}, Altura: ${altura}`);
    console.log(`El perímetro del rectángulo es: ${perimetro.toFixed(2)}`);
} else {
    console.log(`\n--- 4. Cálculo de Perímetro ---`);
    console.log("Entrada no válida. Por favor, escribe valores numéricos válidos para anchura y altura.");
}
