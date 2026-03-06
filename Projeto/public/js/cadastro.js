document.getElementById("formCadastro").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    const resposta = await fetch("/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, idade })
    });

    const dados = await resposta.json();
    const p = document.getElementById("mensagem");
    p.textContent = resposta.ok ? "Sucesso!" : dados.erro;
    p.style.color = resposta.ok ? "green" : "red";
});