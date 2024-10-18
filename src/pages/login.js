import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegação entre páginas
import axios from 'axios'; // Importa axios para fazer requisições HTTP
import Logo from '../assets/img/logobranca.webp'; // Importa a imagem do logo

const Login = () => {
    const [codigo, setCodigo] = useState(''); // Cria um estado para armazenar o código de identificação
    const navigate = useNavigate(); // Inicializa a função de navegação

    const handleSubmit = async (event) => {
        event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)
        try {
            // Envia uma requisição POST para a API com o código de identificação
            const response = await axios.post('https://feira3-production.up.railway.app//usuarios/login', { cod: codigo });
            const userId = response.data; // Recebe o ID do usuário da resposta
            localStorage.setItem("userId", userId); // Armazena o ID do usuário no localStorage
            navigate("/inicio"); // Redireciona o usuário para a página inicial
        } catch (error) {
            console.error('Erro ao fazer login:', error); // Exibe um erro caso a requisição falhe
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 select-none mx-2">
            {/* Container principal do formulário, centralizado na tela */}
            <div className="flex flex-col w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-md md:flex-row">
                <div className="w-full p-8 md:w-1/2 mt-12">
                    <div className="flex justify-center mb-8">
                        {/* Espaço reservado para algum conteúdo adicional */}
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-gray-700 md:text-3xl">Logar</h2>
                    {/* Mensagem que convida o usuário a se cadastrar, caso não tenha conta */}
                    <p className="mb-6 text-sm text-gray-600 md:text-base">Não possui conta? <a href="/Cadastro" className="text-green-600 hover:underline">Cadastrar</a></p>

                    <form onSubmit={handleSubmit} className="bg-white">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 md:text-base">Identificação:</label>
                            <input
                                type="password" // Campo para senha (código de identificação)
                                id="email" // ID do campo
                                className="w-full px-4 py-2 leading-tight bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-green-600 focus:mt-2 transition-all"
                                placeholder="Código de identificação" // Placeholder do campo
                                required // Campo obrigatório
                                value={codigo} // O valor do input está vinculado ao estado
                                onChange={(e) => setCodigo(e.target.value)} // Atualiza o estado conforme o usuário digita
                            />
                        </div>

                        <div className="mb-6">
                            <button type="submit" className="flex items-center justify-center w-full px-4 py-2 text-white bg-green-500 border-2 border-gray-200 rounded-lg hover:bg-green-600 transition ease-in-out duration-300">
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
                {/* Espaço para Imagem */}
                <div className="hidden md:block md:w-1/2">
                    <div className="object-cover w-full h-full bg-green-500">
                        <img src={Logo} className='w- h-2/3 mx-auto relative top-1/2 ' style={{ transform: "translateY(-50%)" }} />
                        {/* Exibe o logo do colégio, centralizado verticalmente */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; // Exporta o componente Login para ser utilizado em outras partes da aplicação
