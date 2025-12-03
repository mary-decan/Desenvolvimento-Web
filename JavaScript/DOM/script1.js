<<<<<<< HEAD
const primeiroParagrafo = document.getElementById("primeiroParagrafo");
const btnAlterar = document.getElementById("btnAlterar");

btnAlterar.addEventListener("click", function(){
    primeiroParagrafo.textContent = "Lorem Ipsum";

});

const segundoParagrafo = document.getElementById("segundoParagrafo");
const btnDestaque = document.getElementById("btnDestaque");

btnDestaque.addEventListener("click", function(){
    segundoParagrafo.style.color="red";

});

const btnRemover = document.getElementById("btnRemover");
btnRemover.addEventListener("click", function(){
    const  terceiroParagrafo = document.getElementById("terceiroParagrafo");
    const itens = container.querySelectorAll("terceiroParagrafo");

    if(itens.length > 0){
        itens[itens.length - 1].remove();
    }else{
        alert("Não há mais paragrafo");
    }

});
=======
const p1 =document.getElementById("paragrafo1");
const p2 =document.getElementById("paragrafo2");
const p3 =document.getElementById("paragrafo3");

const btn1 = document.getElementById("botao1");
const btn2 = document.getElementById("botao2");
const btn3 = document.getElementById("botao3");

btn1.addEventListener("click", function(){
    p1.textContent = "O texto do Paragrafo 1 Foi Alterado pelo Botão 1!";
    p1.style.color = "blue";
});

btn2.addEventListener("click", function(){
    p2.textContent = "O texto do Paragrafo 2 Foi Alterado pelo Botão 2!";
    p2.style.color = "green";
});

btn3.addEventListener("click", function(){
    p3.textContent = "O texto do Paragrafo 3 Foi Alterado pelo Botão 3!";
    p3.style.color = "red";
});

const p1_alt = document.querySelector("#paragrafo1");

>>>>>>> 8940a0e34c212298a2d9cd6cd9ccb0b79050613e
