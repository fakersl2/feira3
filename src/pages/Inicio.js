import React from 'react'; // Importa a biblioteca React para criar componentes
import Navbar from './HeaderNav'; // Importa o componente de navegação (HeaderNav)
import Home from './Home'; // Importa o componente Home
import Projetos from './Projetos'; // Importa o componente Projetos
import Gradient from './Gradient'; // Importa o componente Gradient
import Footer from './Footer'; // Importa o componente Footer (não está sendo usado atualmente)

const Inicio = () => {
  // Componente funcional Inicio
  return (
    <>
      {/* Renderiza os componentes na ordem desejada */}
      <Navbar />   {/* Barra de navegação */}
      <Gradient />  {/* Componente com gradiente e título */}
      <Home />      {/* Seção inicial com mensagem ou conteúdo */}
      <Projetos />  {/* Seção que exibe projetos */}
      {/* Footer ainda não está incluído, mas poderia ser adicionado */}
    </>
  );
}

export default Inicio; // Exporta o componente Inicio para ser utilizado em outras partes da aplicação
