const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Desativar Modo Dark';
    } else {
        themeToggle.textContent = 'Ativar Modo Dark';
    }
});