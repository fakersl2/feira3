import React, { useEffect, useState } from "react"; // Importa React e hooks
import { FaArrowLeft } from "react-icons/fa"; // Importa ícone de seta
import { useParams, Link } from "react-router-dom"; // Importa hooks do React Router
import axios from "axios"; // Importa axios para requisições HTTP

const GradientProjetos = () => {
  const { id } = useParams(); // Obtém o ID do projeto a partir da URL
  const [projeto, setProjeto] = useState({ nome: "", descricao: "" }); // Estado para armazenar os dados do projeto

  useEffect(() => {
    // Função para buscar os detalhes do projeto
    const fetchProjeto = async () => {
      try {
        const response = await axios.get(`https://localhost:5000/projetos/${id}`); // Requisição para buscar o projeto
        setProjeto({
          nome: response.data.nome,
          descricao: response.data.descricao,
        });
      } catch (error) {
        console.error("Erro ao buscar o projeto:", error); // Log de erro
      }
    };

    fetchProjeto(); // Chama a função para buscar o projeto
  }, [id]); // Executa quando o ID muda

  return (
    <div className="z-0 py-16 text-center text-white transition-all h-fit max-w-screen w-dvw bg-gradient-to-b from-green-400 via-green-500 to-green-600 overflow-hidden">
      <div>
        {/* Link para voltar à página inicial */}
        <Link to="/inicio">
          <FaArrowLeft className="text-white" />
        </Link>
      </div>
      <div className="flex flex-col items-center py-10 mx-auto">
        {/* Exibe o nome do projeto */}
        <h1 className="z-10 text-4xl font-extrabold sm:text-5xl dark:text-white">{projeto.nome}</h1>
        {/* Exibe a descrição do projeto */}
        <p className="w-full max-w-4xl mt-2 text-center text-gray-100 sm:text-lg">{projeto.descricao}</p>
      </div>
    </div>
  );
};

export default GradientProjetos; // Exporta o componente
