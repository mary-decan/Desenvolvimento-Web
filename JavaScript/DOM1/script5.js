const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Belo Horizonte"],
        correctAnswer: "Brasília"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "Qual o maior planeta do Sistema Solar?",
        options: ["Marte", "Terra", "Júpiter", "Saturno"],
        correctAnswer: "Júpiter"
    },
    {
        question: "Qual elemento químico tem o símbolo 'Fe'?",
        options: ["Fósforo", "Ferro", "Flúor", "Fermium"],
        correctAnswer: "Ferro"
    },
    {
        question: "Quantos bits há em um byte?",
        options: ["4", "8", "10", "16"],
        correctAnswer: "8"
    }
];

let score = 0;
let answeredCount = 0;
let quizStarted = false;
const quizDiv = document.getElementById('quiz');
const resultBox = document.getElementById('resultBox');
const finalScore = document.getElementById('finalScore');
const feedbackText = document.getElementById('feedback');
const restartBtn = document.getElementById('restartBtn');

function checkAnswer(questionIndex, selectedAnswer) {
    if (questions[questionIndex].answered) return;
    questions[questionIndex].answered = true;
    answeredCount++;

    const correctAnswer = questions[questionIndex].correctAnswer;
    const isCorrect = selectedAnswer === correctAnswer;
    if (isCorrect) {
        score++;
    }
    const optionButtons = document.querySelectorAll(`#question-${questionIndex} .option-button`);
    optionButtons.forEach(button => {
        const buttonText = button.textContent;
        button.disabled = true; 

        if (buttonText === selectedAnswer) {
            button.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (buttonText === correctAnswer) {
            button.classList.add('correct'); 
        }
    });

    if (answeredCount === questions.length) {
        setTimeout(showResults, 1000);
    }
}

function showResults() {
    quizDiv.classList.add('hidden');
    resultBox.classList.remove('hidden');
    finalScore.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    let feedback = '';
    if (score === questions.length) { 
        feedback = 'Excelente! Você é um mestre do conhecimento!';
    } else if (score >= 3) {
        feedback = 'Muito bom! Ótimo desempenho.';
    } else { 
        feedback = 'Ruim. Tente estudar mais na próxima vez!';
    }
    feedbackText.textContent = feedback;
}


function createQuiz() {
    quizDiv.innerHTML = '';
    questions.forEach((q, qIndex) => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';
        questionBlock.id = `question-${qIndex}`;

        const questionText = document.createElement('p');
        questionText.textContent = `${qIndex + 1}. ${q.question}`;
        
        questionBlock.appendChild(questionText);
        q.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option;
            button.addEventListener('click', () => {
                checkAnswer(qIndex, option);
            });
            
            questionBlock.appendChild(button);
        });

        quizDiv.appendChild(questionBlock);
    });
}

function initQuiz() {

    score = 0;
    answeredCount = 0;
    questions.forEach(q => q.answered = false);
    resultBox.classList.add('hidden');
    quizDiv.classList.remove('hidden');
    createQuiz();
}

restartBtn.addEventListener('click', initQuiz);
initQuiz();