import { CheckBoxRounded, Check, Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Botao({ nomeDoBotao, iconeDoBotao, rota }) {

    let icone;


    if (iconeDoBotao == "CheckBoxRounded") {
        icone = <CheckBoxRounded></CheckBoxRounded>
    } else if (iconeDoBotao == "Check") {
        icone = <Check></Check>
    } else {
        icone = <Star></Star>
    }

    return (
        <button className='btn-principal'>
            <Link className='link-btn' to={rota}>
                {icone}
                {nomeDoBotao}
            </Link>
        </button>
    )
}

export default Botao;