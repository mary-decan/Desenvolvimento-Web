import generateName from 'sillyname';
import chalk from 'chalk';


const nome1 = generateName();
const nome2 = generateName();
const nome3 = generateName();

console.log(chalk.yellow('--- Meus Nomes Aleatórios ---'));


console.log(chalk.blue.bold(`1. ${nome1}`));
console.log(chalk.magenta.italic(`2. ${nome2}`));
console.log(chalk.bgCyan.black(`3. ${nome3}`));

console.log(chalk.green('\nDesafio concluído com sucesso! '));