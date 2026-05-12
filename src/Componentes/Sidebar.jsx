import '../App.css'
import { Star, Check, CheckBoxRounded } from '@mui/icons-material'
import Botao from './Botao'

function Sidebar() {

    return (
        <nav className="nav-bar">
            <Botao nomeDoBotao="Todas" iconeDoBotao="CheckBoxRounded" rota="/"></Botao>
            <Botao nomeDoBotao="Completas" iconeDoBotao="Check" rota="/completas"></Botao>
            <Botao nomeDoBotao="Favoritas" iconeDoBotao="Star" rota="/favoritas"></Botao>
        </nav>
    )
}

export default Sidebar