import { useEffect, useState } from "react";
import "../App.css";
import { RadioButtonChecked, RadioButtonUnchecked, Star, StarBorderOutlined, Delete } from "@mui/icons-material"
import * as servicoTarefa from '../servicos/tarefas.servico';

function TarefasList({ filtro = 'todas', tarefas = [], setTarefas }) {

    // Aplicar filtro às tarefas
    let tarefasFiltradas = tarefas;
    if (filtro === 'completas') {
        tarefasFiltradas = tarefas.filter(tarefa => tarefa.completa === true);
    } else if (filtro === 'favoritas') {
        tarefasFiltradas = tarefas.filter(tarefa => tarefa.favorita === true);
    }

    return (
        <ul className="tarefas-lista">
            {
                tarefasFiltradas.map((tarefaDaVez) => {
                    return (
                        <li className="tarefa-unica">
                            <section onClick={
                                () => { servicoTarefa.inverterCompleta(tarefaDaVez.indentificacao, setTarefas) }
                            } className="texto-tarefa">
                                {
                                    tarefaDaVez.completa == true ?
                                        <RadioButtonChecked></RadioButtonChecked>
                                        :
                                        <RadioButtonUnchecked></RadioButtonUnchecked>
                                }
                                <span>{tarefaDaVez.titulo}</span>
                            </section>
                            <section className="acoes">
                                <div onClick={
                                    () => { servicoTarefa.inverterFavorita(tarefaDaVez.indentificacao, setTarefas) }
                                }>
                                    {
                                        tarefaDaVez.favorita == true ?
                                            <Star></Star>
                                            :
                                            <StarBorderOutlined></StarBorderOutlined>
                                    }
                                </div>
                                <div onClick={
                                    () => {
                                        servicoTarefa.deletarTarefa(tarefaDaVez.indentificacao, setTarefas)
                                    }
                                }>
                                    <Delete></Delete>
                                </div>
                            </section>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TarefasList;