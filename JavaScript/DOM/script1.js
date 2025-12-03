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

