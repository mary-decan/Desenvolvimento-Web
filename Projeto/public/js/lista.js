const lista = document.getElementById("listaUsuarios");
const botao = document.getElementById("btnAtualizar");

async function carregarUsuarios() {
    lista.innerHTML = "<li>Carregando...</li>";

    try {
        const resposta = await fetch("/usuarios"); 
        const usuarios = await resposta.json();

        lista.innerHTML = ""; 

        if (usuarios.length === 0) {
            lista.innerHTML = "<li>Nenhum usuário encontrado.</li>";
            return;
        }

     
usuarios.forEach(u => {
    const li = document.createElement("li");
    li.innerHTML = `
        ID: ${u.id} - <strong>${u.nome}</strong> (${u.idade} anos)
        <button onclick="deletarUsuario(${u.id})">Excluir</button>
    `;
    lista.appendChild(li);
});


async function deletarUsuario(id) {
    if (confirm("Tem certeza que deseja excluir?")) {
        await fetch(`/usuarios/${id}`, { method: "DELETE" });
        carregarUsuarios(); 
    }
}
  
        usuarios.forEach(u => {
            const li = document.createElement("li");
            li.textContent = `ID: ${u.id} - ${u.nome} (${u.idade} anos)`;
            lista.appendChild(li);
        });

    } catch (erro) {
        console.error("Erro:", erro);
        document.getElementById("mensagem").textContent = "Erro ao carregar lista.";
    }
}


botao.addEventListener("click", carregarUsuarios);


carregarUsuarios();