import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import CadEmprestimo from './components/pages/CadEmprestimo'
import ListarEmprestimo from './components/pages/ListarEmprestimo'
import Conteiner from './components/layout/Container'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer'

import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>

        <Conteiner>
          
          <Routes>

            <Route exect path='/' element={<Home/>} />
            <Route path='/cadastrar' element={<CadEmprestimo/>} />
            <Route path='/lista' element={<ListarEmprestimo/>} />

          </Routes>

        </Conteiner>
      <Footer />
    </Router>
  );
}

export default App;
