const registerButton = document.getElementById('registerClickButton');
const clearButton = document.getElementById('clearHistoryButton');
const historyList = document.getElementById('historyList');

// Função para registrar o evento
registerButton.addEventListener('click', function() {
    
    // Habilidade Obrigatória: new Date() para gerar data/hora
    const now = new Date();
    const timestamp = now.toLocaleDateString('pt-BR') + ' ' + now.toLocaleTimeString('pt-BR');
    
    const contentText = `Clique registrado em: ${timestamp}`;
    
    // Habilidade Obrigatória: createElement() para gerar o item (<li>)
    const listItem = document.createElement('li');
    listItem.textContent = contentText;
    
    // Habilidade Obrigatória: appendChild() para inserir na lista (<ul>)
    historyList.appendChild(listItem);
});

// Função para limpar o histórico
clearButton.addEventListener('click', function() {
    // Usa innerHTML = '' para limpar rapidamente
    historyList.innerHTML = '';
});