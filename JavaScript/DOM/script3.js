let contador = 0;

const elementoValor = document.getElementById("valorContador");
const botaoMais = document.getElementById("botaoIncrementar");
const botaoMenos = document.getElementById("botaoDescrementar");

function atualizarInterface(){
    elementoValor.textContent = contador;
}

botaoMais.addEventListener("click", function(){
    contador = contador + 1;
    atualizarInterface();
});


botaoMenos.addEventListener("click", function(){
    contador = contador - 1;
    atualizarInterface();
});

botaoMenos.addEventListener("click", function(){
    if(contador > 0) {
        contador--;
        atualizarInterface();
    }

});