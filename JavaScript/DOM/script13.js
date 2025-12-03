const searchInput = document.getElementById('searchInput');
// Seleciona todos os itens da lista
const listItems = document.querySelectorAll('#nameList li');

// Adiciona um listener para o evento 'input' (disparado a cada tecla digitada)
searchInput.addEventListener('input', function() {
    
    // Converte o termo de busca para minúsculas
    const searchTerm = searchInput.value.toLowerCase();

    // Itera sobre todos os elementos <li>
    listItems.forEach(item => {
        
        // Pega o texto do item e converte para minúsculas
        const itemText = item.textContent.toLowerCase();

        // Habilidade: .includes()
        // Verifica se o texto do item contém o termo de busca
        if (itemText.includes(searchTerm)) {
            
            // Habilidade: .style.display = "block"
            // Se houver correspondência, mostra o item
            item.style.display = 'block'; 
        } else {
            
            // Habilidade: .style.display = "none"
            // Caso contrário, oculta o item
            item.style.display = 'none';
        }
    });
});