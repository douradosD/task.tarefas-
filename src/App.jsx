import './App.css'
import Sidebar from './Componentes/Sidebar'
import Tarefas from './Componentes/Tarefas'
import { CheckCircle } from '@mui/icons-material'
import { Routes, Route } from 'react-router-dom';
function App() {



  return (
    <>
      <header>
        <h1>Tarefas App</h1>
        <CheckCircle></CheckCircle>
      </header>
      <div className="container-do-conteudo">
        <Sidebar />
        <div className="conteudo-principal">
          <Routes>
            <Route path="/" element={<Tarefas />} />
            <Route path="/completas" element={<Tarefas />} />
            <Route path="/favoritas" element={<Tarefas />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
