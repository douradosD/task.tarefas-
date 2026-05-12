import "../App.css"
import TarefasList from './TarefasList'
import TarefaForm from './TarefaForm'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as servicoTarefa from '../servicos/tarefas.servico'

function Tarefas() {
    const location = useLocation();
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        setTarefas(servicoTarefa.pegarTarefas());
    }, [])

    let filtro = 'todas';
    if (location.pathname === '/completas') {
        filtro = 'completas';
    } else if (location.pathname === '/favoritas') {
        filtro = 'favoritas';
    }

    return (
        <div className="tarefas">
            <TarefaForm setTarefas={setTarefas} />
            <TarefasList filtro={filtro} tarefas={tarefas} setTarefas={setTarefas} />
        </div>
    )
}

export default Tarefas