const list = document.getElementById('dynamicList');
const addButton = document.getElementById('addButton');
const itemInput = document.getElementById('itemInput');

// 1. Lógica para ADICIONAR novos itens
addButton.addEventListener('click', function() {
    const itemName = itemInput.value.trim();
    if (itemName === "") return;

    // Cria o novo elemento <li>
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');
    
    // Define o texto e anexa o botão "Remover"
    newListItem.innerHTML = `${itemName} <button class="remove-btn">Remover</button>`;
    
    // Adiciona o novo item à lista
    list.appendChild(newListItem);
    
    itemInput.value = '';
    itemInput.focus();
});


// 2. Lógica para REMOVER SELETIVAMENTE (Núcleo do Exercício)
list.addEventListener('click', function(event) {
    
    // Habilidade: event.target
    // Verifica se o elemento clicado é um botão com a classe 'remove-btn'
    if (event.target.classList.contains('remove-btn')) {
        
        // event.target é o botão clicado
        // event.target.parentNode é o <li> (o item da lista)
        
        // Habilidade: parentNode.remove()
        // Remove o elemento pai (o <li>) do botão clicado
        event.target.parentNode.remove();
    }
});