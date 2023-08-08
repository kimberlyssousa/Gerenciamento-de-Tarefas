let listaTarefas = [];

function adicionarTarefa() {
    const tarefaInput = document.getElementById("tarefa");
    const dataInput = document.getElementById("data");
    const horaInput = document.getElementById("hora");

    const tarefa = tarefaInput.value;
    const data = formatarData(dataInput.value);
    const hora = horaInput.value;

    if (tarefa === "" || data === "" || hora === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const novaTarefa = {
        tarefa: tarefa,
        data: data,
        hora: hora,
        feita: false
    };

    listaTarefas.push(novaTarefa);

    exibirListaTarefas();

    tarefaInput.value = "";
    dataInput.value = "";
    horaInput.value = "";
}

function formatarData(data) {
    const partes = data.split("-");
    const dia = partes[2];
    const mes = partes[1];
    const ano = partes[0].slice(-2);

    return `${dia}/${mes}/${ano}`;
}

function exibirListaTarefas() {
    const listaTarefasElemento = document.getElementById("lista-tarefas");
    listaTarefasElemento.innerHTML = "";

    for (let i = 0; i < listaTarefas.length; i++) {
        const tarefa = listaTarefas[i];

        const tarefaElemento = document.createElement("li");
        tarefaElemento.innerText = `${tarefa.tarefa} `;
        tarefaElemento.classList.add("tarefa");

        const dataElemento = document.createElement("span");
        dataElemento.innerText = tarefa.data;
        dataElemento.classList.add("data");

        const horaElemento = document.createElement("span");
        horaElemento.innerText = tarefa.hora;
        horaElemento.classList.add("hora");

        const acoesElemento = document.createElement("div");
        acoesElemento.classList.add("acoes");

        const feitaButtonElemento = document.createElement("button");
        feitaButtonElemento.innerText = tarefa.feita ? "Feita" : "Feita";
        feitaButtonElemento.addEventListener("click", () => {
            tarefa.feita = !tarefa.feita;
            exibirListaTarefas();
        });

        const excluirButtonElemento = document.createElement("button");
        excluirButtonElemento.innerText = "Excluir";
        excluirButtonElemento.addEventListener("click", () => {
            listaTarefas.splice(i, 1);
            exibirListaTarefas();
        });

        tarefaElemento.appendChild(horaElemento);
        acoesElemento.appendChild(horaElemento);

        acoesElemento.appendChild(feitaButtonElemento);
        acoesElemento.appendChild(excluirButtonElemento);

        tarefaElemento.appendChild(dataElemento);
        tarefaElemento.appendChild(acoesElemento);

        if (tarefa.feita) {
            tarefaElemento.classList.add("done");
        }

        listaTarefasElemento.appendChild(tarefaElemento);
    }
}

exibirListaTarefas();