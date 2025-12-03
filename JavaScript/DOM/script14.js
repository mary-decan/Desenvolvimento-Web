const quizForm = document.getElementById('quizForm');
const resultContainer = document.getElementById('resultContainer');

// Objeto contendo as respostas corretas (Nome do campo: Valor correto)
const correctAnswers = {
    q1: 'a', // Marte
    q2: 'b', // Leonardo da Vinci
    q3: 'c'  // Oceano Pacífico
};

quizForm.addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário (recarregar página)
    event.preventDefault(); 
    
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    // Habilidade: querySelectorAll("input:checked")
    // Seleciona todos os radio buttons que estão marcados
    const userAnswers = document.querySelectorAll('input:checked');
    
    // 1. Verifica se todas as perguntas foram respondidas
    if (userAnswers.length !== totalQuestions) {
        resultContainer.textContent = `Por favor, responda a todas as ${totalQuestions} perguntas.`;
        resultContainer.classList.remove('success', 'error', 'hidden');
        resultContainer.classList.add('error');
        return;
    }
    
    // 2. Contagem de acertos
    userAnswers.forEach(answer => {
        const questionName = answer.name; // Ex: 'q1'
        const userAnswerValue = answer.value; // Ex: 'a', 'b', ou 'c'
        
        // Verifica se a resposta do usuário é igual à resposta correta
        if (userAnswerValue === correctAnswers[questionName]) {
            score++;
        }
    });

    // 3. Mostrar resultado no DOM
    const resultText = `Você acertou ${score} de ${totalQuestions} perguntas!`;
    
    resultContainer.textContent = resultText;
    resultContainer.classList.remove('hidden', 'success', 'error');
    
    if (score === totalQuestions) {
        resultContainer.classList.add('success');
    } else if (score > 0) {
        resultContainer.classList.add('partial');
    } else {
        resultContainer.classList.add('error');
    }
});