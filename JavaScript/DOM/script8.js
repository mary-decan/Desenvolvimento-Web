// 1. Seleção dos Elementos do DOM
const form = document.getElementById('contactForm');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagemInput = document.getElementById('mensagem');
const messageContainer = document.getElementById('messageContainer');

// Função principal que trata o envio do formulário
form.addEventListener('submit', function(event) {
    
    // Impede o comportamento padrão de envio do formulário (que recarregaria a página)
    event.preventDefault(); 
    
    // Oculta mensagens anteriores
    messageContainer.classList.remove('success', 'error');
    messageContainer.classList.add('hidden');
    
    // Habilidade: .value para ler os dados e 'if' para verificar se estão vazios
    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const mensagem = mensagemInput.value.trim();
    
    // Regra: Se qualquer campo estiver vazio -> avisar o usuário
    if (nome === '' || email === '' || mensagem === '') {
        
        // Exibe mensagem de erro
        displayMessage('Por favor, preencha todos os campos!', 'error');
        
        // Habilidade: alert() (opcional, mas solicitado)
        // alert('Erro: Todos os campos são obrigatórios.'); 
        
        return; // Interrompe a função aqui
    }
    
    // Regra: Se tudo estiver preenchido -> mensagem de sucesso
    // Exibe mensagem de sucesso
    displayMessage('Formulário enviado com sucesso! Obrigado pelo contato.', 'success');
    
    // Opcional: Limpa os campos após o sucesso
    form.reset();
});

// Função auxiliar para exibir mensagens visuais (usando DOM)
function displayMessage(text, type) {
    messageContainer.textContent = text;
    messageContainer.classList.add(type); // Adiciona classe 'success' ou 'error' para estilização
    messageContainer.classList.remove('hidden'); // Mostra o container
}