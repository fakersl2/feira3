import React, { useState, useEffect } from 'react'; // Importa os hooks useState e useEffect do React
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from "react-icons/bs"; // Importa ícones para o sistema de votação
import axios from 'axios'; // Importa axios para requisições HTTP

function Modal({ isOpen, toggleModal, projectId }) {
  const [codigo, setCodigo] = useState(''); // Estado para armazenar a identificação
  const [nota, setNota] = useState(''); // Estado para armazenar a nota
  const [comentario, setComentario] = useState(''); // Estado para armazenar o comentário
  const [errorMessage, setErrorMessage] = useState(''); // Estado para armazenar mensagens de erro
  const [projectName, setProjectName] = useState(''); // Estado para armazenar o nome do projeto

  // useEffect para buscar o nome do projeto quando o modal é aberto
  useEffect(() => {
    if (isOpen) {
      axios.get(`http://localhost:5000/projetos/${projectId}`)
        .then(response => {
          setProjectName(response.data.nome); // Armazena o nome do projeto
          console.log('Project Name:', response.data.nome); // Log para depuração
        })
        .catch(error => console.error('Erro ao buscar nome do projeto:', error));
    }
  }, [isOpen, projectId]); // Dependências para recarregar quando o modal abrir

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevê o comportamento padrão do formulário
    const userId = localStorage.getItem('userId'); // Obtém o ID do usuário armazenado no localStorage
    const voto = {
      codigo: codigo,
      nota: nota,
      comentario: comentario,
      usuario_id: userId
    };

    try {
      const response = await axios.post(`http://localhost:5000/votos/${projectId}`, voto, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        console.log('Voto enviado com sucesso!'); // Log de sucesso
        toggleModal(); // Fecha o modal
        window.location.reload(); // Recarrega a página
      } else {
        setErrorMessage('Erro ao enviar voto'); // Define mensagem de erro
      }
    } catch (error) {
      setErrorMessage(`Erro ao enviar voto: ${error.message}`); // Define mensagem de erro com detalhes
    }
  };

  return (
    <div>
      {isOpen && ( // Renderiza o modal se estiver aberto
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50" onClick={toggleModal}></div>
          <div className="z-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center">Votação</h2>
            <p className="mb-4 text-center">{projectName}</p> {/* Exibe o nome do projeto */}
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Identificação" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" 
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)} // Atualiza o estado de código
                required
              />
              <div className="mb-4"></div>
              
              <div className="flex justify-center mb-4">
                {/* Botões para selecionar a nota com emojis */}
                <button 
                  type="button" 
                  className="text-green-500 transition hover:scale-150 ease-in-out focus:ring-2 active:shadow rounded-full focus:ring-green-500 hover:ring-1"
                  onClick={() => setNota('bom')} // Define nota como "bom"
                >
                  <BsEmojiSmile />
                </button>
                <button 
                  type="button" 
                  className="mx-4 text-gray-500 transition hover:scale-150 ease-in-out focus:ring-2 active:shadow rounded-full focus:ring-gray-500 hover:ring-1"
                  onClick={() => setNota('médio')} // Define nota como "médio"
                >
                  <BsEmojiNeutral />
                </button>
                <button 
                  type="button" 
                  className="text-red-500 transition hover:scale-150 ease-in-out focus:ring-2 active:shadow rounded-full focus:ring-red-500 hover:ring-1"
                  onClick={() => setNota('ruim')} // Define nota como "ruim"
                >
                  <BsEmojiFrown />
                </button>
              </div>
              <div className="mb-4">
                <textarea 
                  placeholder="Comentário (opcional)..." 
                  className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-400" 
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)} // Atualiza o estado de comentário
                ></textarea>
              </div>
              {errorMessage && ( // Exibe mensagem de erro se houver
                <p className="mb-4 text-red-500">{errorMessage}</p>
              )}
              <div className="text-center">
                <button 
                  type="submit" 
                  className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
                >
                  SALVAR
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal; // Exporta o componente Modal
