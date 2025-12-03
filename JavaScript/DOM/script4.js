const nameInput = document.getElementById("nameInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const nameList = document.getElementById("nameList");

addButton.addEventListener("click", function(){
    const newName = nameInput.ariaValueMax.trim();
    if(newName ==="") {
        alert("Por favor, digite um nome valido.");
        return;
    }

    const lisItem = document.createElement("li");
    lisItem.textContent = newName;
    nameList.appendChild(lisItem);
    nameInput.value = "";
    nameInput.focus();

    clearButton.addEventListener("click", function(){
        nameList.innerHTML = "";
        while (nameList.firstChild) {
            nameList.removeChild(nameList.firstChild);
        }

    });
});
