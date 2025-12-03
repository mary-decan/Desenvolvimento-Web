// Habilidade: querySelector (ou getElementById)
const button = document.querySelector('#dropdownButton');
const menu = document.querySelector('#dropdownMenu');

button.addEventListener('click', function() {
    // Habilidade: classList.toggle()
    // Adiciona a classe 'menu-visivel' se ela não estiver lá, ou remove se estiver.
    menu.classList.toggle('menu-visivel');
    
    // Opcional: Alterar o texto do botão
    if (menu.classList.contains('menu-visivel')) {
        button.textContent = 'Fechar Menu';
    } else {
        button.textContent = 'Opções do Menu';
    }
});

// Bônus: Fechar o menu se o usuário clicar fora dele
document.addEventListener('click', function(event) {
    const isClickInside = menu.contains(event.target) || button.contains(event.target);
    
    if (!isClickInside && menu.classList.contains('menu-visivel')) {
        menu.classList.remove('menu-visivel');
        button.textContent = 'Opções do Menu';
    }
});