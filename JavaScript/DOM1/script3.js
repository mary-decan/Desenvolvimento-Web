let registros = [];

const cadastroForm = document.getElementById('cadastroForm');
const listaRegistros = document.getElementById('listaRegistros');

function renderizarLista() {
    listaRegistros.innerHTML = '';

    registros.forEach((aluno, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${aluno.nome}, ${aluno.idade} anos`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Excluir';
        
        removeButton.addEventListener('click', () => {
            removerRegistro(index); 
        });

        listItem.appendChild(removeButton);
        listaRegistros.appendChild(listItem);
    });
}

function removerRegistro(index) {
    registros.splice(index, 1);
    renderizarLista();
}

function adicionarRegistro(event) {
    event.preventDefault(); 

    const nomeInput = document.getElementById('nome');
    const idadeInput = document.getElementById('idade');

    const nome = nomeInput.value.trim();
    const idade = parseInt(idadeInput.value);

    if (nome === '' || isNaN(idade) || idade <= 0) {
        alert('Por favor, preencha o nome e a idade válida.');
        return;
    }

    const novoRegistro = { nome: nome, idade: idade };

    registros.push(novoRegistro);

    renderizarLista();

    cadastroForm.reset();
}

cadastroForm.addEventListener('submit', adicionarRegistro);
renderizarLista();