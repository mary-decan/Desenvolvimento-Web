// 1. Seleção dos Elementos do DOM
const tableBody = document.querySelector('#dynamicTable tbody');
const addRowButton = document.getElementById('addRowButton');
const removeRowButton = document.getElementById('removeRowButton');

let rowIndex = 1; // Contador para rastrear o número da linha

// Função para ADICIONAR uma nova linha
addRowButton.addEventListener('click', function() {
    
    // Habilidade: insertRow() ou createElement("tr")
    // Usaremos insertRow() por ser um método nativo mais limpo para tabelas
    const newRow = tableBody.insertRow(); // Adiciona uma nova linha no final do tbody
    
    // Adiciona as células (colunas) na nova linha
    const cell1 = newRow.insertCell(0); // Célula 1: Índice
    const cell2 = newRow.insertCell(1); // Célula 2: Conteúdo
    const cell3 = newRow.insertCell(2); // Célula 3: Data
    
    // Preenche as células com dados
    cell1.textContent = rowIndex;
    cell2.textContent = `Novo Item ${rowIndex}`;
    cell3.textContent = new Date().toLocaleTimeString();
    
    rowIndex++; // Incrementa o contador para a próxima linha
});

// Função para REMOVER a última linha
removeRowButton.addEventListener('click', function() {
    
    const rowCount = tableBody.rows.length;
    
    if (rowCount > 0) {
        // Habilidade: remove() (no último elemento filho) ou deleteRow()
        
        // Opção 1: Usando remove() no último elemento (como sugerido no requisito)
        // tableBody.lastElementChild.remove();
        
        // Opção 2: Usando deleteRow() que é nativo da API de Tabelas
        tableBody.deleteRow(rowCount - 1); // Remove a linha no índice (rowCount - 1)
        
        rowIndex--; // Decrementa o contador
    } else {
        alert("A tabela já está vazia!");
    }
});