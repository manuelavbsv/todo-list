function adicionarTarefa() {
  const input = document.getElementById("nova-tarefa");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa antes de adicionar.");
    return;
  }

  const lista = document.getElementById("lista-tarefas");

  const item = document.createElement("li");
  item.innerHTML = `
    <span>${texto}</span>
    <div class="botoes">
        <button onclick="concluirTarefa(this)">Concluir</button>
        <button onclick="removerTarefa(this)" class="remover">Remover</button>
    </div>
  `;

  lista.appendChild(item);
  input.value = "";
}

function removerTarefa(botao) {
  const item = botao.closest("li");
  item.remove();
}

function concluirTarefa(botao) {
    const item = botao.closest("li")
    item.style.opacity = "0.5";
    item.style.textDecoration = "line-through";
    setTimeout(()=> item.remove(), 500);
}

function limparTudo(){
    const lista = document.getElementById("lista-tarefas");
    if (confirm("Tem certeza que deseja remover todas as tarefas?")) {
        lista.innerHTML = "";
    }
}
