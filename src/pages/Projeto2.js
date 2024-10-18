import React from 'react' // Importa a biblioteca React
import Votacao from './avaliacoes' // Importa o componente Votacao (Avaliações)
import GradientProjetos from './GradientProjetos' // Importa o componente GradientProjetos

const Projeto2 = () => {
  return (
    <>
      {/* Renderiza o componente GradientProjetos */}
      <GradientProjetos />
      {/* Renderiza o componente Votacao abaixo do GradientProjetos */}
      <Votacao />
    </>
  )
}

export default Projeto2; // Exporta o componente Projeto2 para ser utilizado em outras partes da aplicação
