const readline = require('readline-sync');
/**
 * Verifica se uma string é um palíndromo (lida igual de trás para frente).
 * Ignora espaços e maiúsculas/minúsculas.
 * @param {string} str - A string a ser verificada.
 * @returns {boolean} True se for palíndromo, false caso contrário.
 */
function ehPalindromo(str) {
    // 1. Formata a string: minúsculas e remove espaços (necessário para frases como "Ame o poema")
    let strFormatada = str.toLowerCase().replace(/\s/g, '');

    // 2. Inverte a string: 
    // .split('') -> transforma em vetor de caracteres
    // .reverse() -> inverte a ordem do vetor
    // .join('') -> junta o vetor de volta em uma string
    let strInvertida = strFormatada.split('').reverse().join('');

    // 3. Compara a string formatada original com a invertida
    return strFormatada === strInvertida;
}

console.log("\n--- 9.4 Verificador de Palíndromo ---");
console.log(`'arara' é palíndromo? ${ehPalindromo('arara')}`);
console.log(`'radar' é palíndromo? ${ehPalindromo('radar')}`);
console.log(`'casa' é palíndromo? ${ehPalindromo('casa')}`);
console.log(`'Ame o poema' é palíndromo? ${ehPalindromo('Ame o poema')}`);