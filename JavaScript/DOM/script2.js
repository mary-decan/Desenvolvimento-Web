const button = document.getElementById("toggleButton");
const square = document.getElementById("coloredSquare");

button.addEventListener("click", function(){
square.classList.toggle("escondido");

if(square.classList.contains("escondido")) {
    button.textContent = "Clique para Mostrar";
}else{
    button.textContent = "Clique para Esconder";
}
});