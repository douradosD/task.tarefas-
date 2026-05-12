export function pegarTarefas() {
    return JSON.parse(localStorage.getItem('tarefas')) || []
}

export function adicionarTarefa(tarefa) {
    const tarefasAntigas = pegarTarefas();
    const tarefasAntigasComANova = [...tarefasAntigas, tarefa];
    const novasTarefasEmString = JSON.stringify(tarefasAntigasComANova);
    localStorage.setItem('tarefas', novasTarefasEmString);
}

export function inverterCompleta(indentificacao, setTarefas) {
    const tarefasAntigas = pegarTarefas();
    const todasTarefasComACompletaInvertida = tarefasAntigas.map(
        (tarefaDaVez) => {
            if (tarefaDaVez.indentificacao == indentificacao) {
                tarefaDaVez.completa = !tarefaDaVez.completa;
                return tarefaDaVez;
            } else {
                return tarefaDaVez;
            }
        }
    )
    setTarefas(todasTarefasComACompletaInvertida);
    const tarefasAtualizadasEmString = JSON.stringify(todasTarefasComACompletaInvertida);
    localStorage.setItem('tarefas', tarefasAtualizadasEmString);
}

export function inverterFavorita(indentificacao, setTarefas) {
    const tarefasAntigas = pegarTarefas();
    const todasTarefasComAFavoritaInvertida = tarefasAntigas.map(
        (tarefaDaVez) => {
            if (tarefaDaVez.indentificacao == indentificacao) {
                tarefaDaVez.favorita = !tarefaDaVez.favorita;
                return tarefaDaVez;
            } else {
                return tarefaDaVez;
            }
        }
    )
    setTarefas(todasTarefasComAFavoritaInvertida);
    const tarefasAtualizadasEmString = JSON.stringify(todasTarefasComAFavoritaInvertida);
    localStorage.setItem('tarefas', tarefasAtualizadasEmString);
}

export function deletarTarefa(indentificacao, setTarefas) {
    const tarefasAntigas = pegarTarefas();
    const todasTarefasMenosATarefaDeletada = tarefasAntigas.filter(
        (tarefaDaVez) => {
            const condicao = (tarefaDaVez.indentificacao != indentificacao);
            return condicao;
        }
    );
    setTarefas(todasTarefasMenosATarefaDeletada);
    const tarefasAtualizadasEmString = JSON.stringify(todasTarefasMenosATarefaDeletada);
    localStorage.setItem('tarefas', tarefasAtualizadasEmString);
}