/* eslint-disable jsx-a11y/anchor-is-valid */ // Desativa a regra de acessibilidade para âncoras sem valor
import React, { useState, useEffect } from 'react'; // Importa os hooks useState e useEffect do React
import axios from 'axios'; // Importa axios para requisições HTTP

function ModalAdicionar({ isOpen, toggleModal }) {
  const [nomeProjeto, setNomeProjeto] = useState(''); // Estado para armazenar o nome do projeto
  const [descricaoProjeto, setDescricaoProjeto] = useState(''); // Estado para armazenar a descrição do projeto
  const [categoria, setCategoria] = useState(''); // Estado para armazenar a categoria do projeto
  const [turma, setTurma] = useState(''); // Estado para armazenar a turma do projeto
  const [categorias, setCategorias] = useState([]); // Estado para armazenar a lista de categorias
  const [turmas, setTurmas] = useState([]); // Estado para armazenar a lista de turmas
  const [errorMessage, setErrorMessage] = useState(''); // Estado para armazenar mensagens de erro

  // useEffect para buscar categorias e turmas ao montar o componente
  useEffect(() => {
    // Fetch categorias
    axios.get('https://feira3-back.vercel.app/categorias')
      .then(response => setCategorias(response.data)) // Armazena categorias na lista
      .catch(error => console.error('Erro ao buscar disciplinas/categorias:', error)); // Log de erro

    // Fetch turmas
    axios.get('https://feira3-back.vercel.app/turmas')
      .then(response => setTurmas(response.data)) // Armazena turmas na lista
      .catch(error => console.error('Erro ao buscar turmas:', error)); // Log de erro
  }, []); // Array vazio como dependência para executar apenas uma vez

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevê o comportamento padrão do formulário
    const projeto = {
      nome: nomeProjeto,
      descricao: descricaoProjeto,
      categoria: categoria,
      turma: turma,
    };

    axios.post('https://feira3-back.vercel.app/projetos', projeto) // Envia dados do projeto para a API
      .then(response => {
        console.log('Projeto salvo com sucesso:', response.data); // Log de sucesso
        setNomeProjeto(''); // Limpa o campo de nome do projeto
        setDescricaoProjeto(''); // Limpa o campo de descrição
        setCategoria(''); // Limpa a categoria selecionada
        setTurma(''); // Limpa a turma selecionada
        setErrorMessage(''); // Limpa a mensagem de erro
        toggleModal(); // Fecha o modal
        window.location.reload(); // Recarrega a página
      })
      .catch(error => {
        console.error('Erro ao salvar projeto:', error); // Log de erro
        setErrorMessage('Ocorreu um erro ao salvar o projeto. Por favor, tente novamente.' + error.message); // Define mensagem de erro
      });
  };

  if (!isOpen) return null; // Retorna null se o modal não estiver aberto

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="fixed inset-0 bg-black opacity-50" onClick={toggleModal}></div>
      <div className="z-10 py-8 px-10 bg-white rounded-lg shadow-lg min-w-fit hover:py-10 hover:px-12 transition-all ease-in-out">
        <h2 className="pb-5 text-xl font-semibold text-center cursor-default transition-all hover:scale-105 ease-in-out">Adicionar Novo Projeto</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome do Projeto"
            value={nomeProjeto}
            onChange={(e) => setNomeProjeto(e.target.value)} // Atualiza o estado de nome do projeto
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-green-400 transition-all focus:scale-105"
            required
          />
          <textarea
            placeholder="Descrição do Projeto(opcional)"
            value={descricaoProjeto}
            onChange={(e) => setDescricaoProjeto(e.target.value)} // Atualiza o estado de descrição
            className="w-full p-2 mb-4 border border-gray-300 rounded-md resize-none focus:ring-green-400 transition-all focus:scale-105"
          ></textarea>
          <div className='flex items-center justify-around group'>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)} // Atualiza o estado de categoria
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-green-400 transition-all focus:scale-105 focus:mr-1"
              required
            >
              <option value="">Selecione a Disciplina</option>
              {categorias.map((cat) => ( // Mapeia categorias para opções
                <option key={cat.id} value={cat.id}>
                  {cat.nome}
                </option>
              ))}
            </select>
          </div>

          <select
            value={turma}
            onChange={(e) => setTurma(e.target.value)} // Atualiza o estado de turma
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-green-400 transition-all focus:scale-105"
            required
          >
            <option value="">Selecione a Turma</option>
            {turmas.map((turma) => ( // Mapeia turmas para opções
              <option key={turma.id} value={turma.id}>
                {turma.nome}
              </option>
            ))}
          </select>
          <button type="submit" className="w-full px-4 py-2 text-white bg-green-400 rounded-md focus:ring-green-300 transition-all hover:scale-105 ease-in-out hover:bg-green-500 hover:font-semibold">
            Salvar
          </button>
        </form>
        {errorMessage && ( // Exibe mensagem de erro se houver
          <p className="mt-4 text-red-500">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default ModalAdicionar; // Exporta o componente ModalAdicionar
