import React from 'react'; // Importa a biblioteca React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa componentes para o roteamento
import PaginaErro from './pages/PaginaErro'; // Importa a página de erro
import Avaliacoes from './pages/avaliacoes'; // Importa a página de avaliações
import Cadastro from './pages/cadastro'; // Importa a página de cadastro
import Footer from './pages/Footer'; // Importa o componente de rodapé
import Gradient from './pages/Gradient'; // Importa o componente de gradiente
import Headernav from './pages/HeaderNav'; // Importa o cabeçalho de navegação
import Home from './pages/Home'; // Importa a página inicial
import Login from './pages/login'; // Importa a página de login
import Projetos from './pages/Projetos'; // Importa a página de projetos
import Inicio from './pages/Inicio'; // Importa a página de início
import Projeto2 from './pages/Projeto2'; // Importa a página do projeto específico

// Componente que define as rotas da aplicação
export const Rotas = () => {
    return (
        <Router> {/* Inicializa o roteador */}
            <Routes> {/* Define as rotas da aplicação */}
                {/* Rota pra caso a pessoa digite o caminho errado */}
                <Route path="*" element={<PaginaErro />} /> {/* Rota de erro que é exibida para qualquer caminho não definido */}

                {/* Rotas para as outras páginas */}
                <Route path="/avaliacoes" element={<Avaliacoes />} /> {/* Rota para a página de avaliações */}
                <Route path="/cadastro" element={<Cadastro />} /> {/* Rota para a página de cadastro */}
                <Route path="/footer" element={<Footer />} /> {/* Rota para o componente de rodapé */}
                <Route path="/gradient" element={<Gradient />} /> {/* Rota para o componente de gradiente */}
                <Route path="/headernav" element={<Headernav />} /> {/* Rota para o cabeçalho de navegação */}
                <Route path="/home" element={<Home />} /> {/* Rota para a página inicial */}
                <Route path="/login" element={<Login />} /> {/* Rota para a página de login */}
                <Route path="/projetos" element={<Projetos />} /> {/* Rota para a página de projetos */}
                <Route path="/inicio" element={<Inicio />} /> {/* Rota para a página de início */}
                <Route path="/projeto/:id" element={<Projeto2 />} /> {/* Rota para a página do projeto específico, usando um parâmetro :id */}
            </Routes>
        </Router>
    );
};

// Exporta o componente de rotas para ser usado em outras partes da aplicação
export default Rotas;
