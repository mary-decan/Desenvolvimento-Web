function classificarNatacao() {
    const idadeInput = prompt("4. Classificação de Natação:\nDigite a idade da pessoa:");
    const idade = parseInt(idadeInput);

    if (isNaN(idade) || idade < 0) {
        alert("4. Idade inválida.");
        return;
    }

    let categoria = "";

    if (idade >= 5 && idade <= 7) {
        categoria = "Infantil A (5-7 anos)";
    } else if (idade >= 8 && idade <= 10) {
        categoria = "Infantil B (8-10 anos)";
    } else if (idade >= 11 && idade <= 13) {
        categoria = "Juvenil A (11-13 anos)";
    } else if (idade >= 14 && idade <= 17) {
        categoria = "Juvenil B (14-17 anos)";
    } else if (idade >= 18) {
        categoria = "Adulto (maiores de 18 anos)";
    } else {
        categoria = "Idade não se encaixa nas categorias mínimas (menor que 5 anos)";
    }

    alert(`4. Idade: ${idade} anos. Categoria: **${categoria}**.\n`);
}
