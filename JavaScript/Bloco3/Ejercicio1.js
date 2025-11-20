let entradaDobro = prompt("Digite um número inteiro:");
let numeroInteiro = parseInt(entradaDobro);


if (!isNaN(numeroInteiro)) {
    let dobro = numeroInteiro * 2;
    console.log(`O número digitado foi: ${numeroInteiro}`);
    console.log(`O dobro desse número é: ${dobro}`);
} else {
    console.log(`Entrada inválida. Por favor, digite um número inteiro.`);
}