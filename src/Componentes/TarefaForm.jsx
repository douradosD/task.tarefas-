import { useState } from 'react';
import '../App.css';
import * as servicoTarefa from '../servicos/tarefas.servico';

function TarefaForm({ setTarefas }) {
    const [tarefa, setTarefa] = useState({
        titulo: '',
        completa: false,
        favorita: false,
        indentificacao: crypto.randomUUID()
    });

    const handleSubmit = (evento) => {
        evento.preventDefault();
        if (tarefa.titulo.trim() === '') return;

        servicoTarefa.adicionarTarefa(tarefa);
        setTarefas(servicoTarefa.pegarTarefas());

        // Limpar o formulário
        setTarefa({
            titulo: '',
            completa: false,
            favorita: false,
            indentificacao: crypto.randomUUID()
        });
    }

    return (
        <form onSubmit={handleSubmit} className='tarefas-form'>
            <input
                onChange={
                    (evento) => { setTarefa({ ...tarefa, titulo: evento.target.value }) }
                }
                placeholder='Adicionar tarefas'
                value={tarefa.titulo}
            />
            <button className='btn-adicionar'>Adicionar Tarefas</button>
        </form>
    )
}

export default TarefaForm;