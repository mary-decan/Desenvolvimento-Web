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