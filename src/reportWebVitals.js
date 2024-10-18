// Função para medir e relatar métricas de desempenho da aplicação
const reportWebVitals = onPerfEntry => {
  // Verifica se onPerfEntry é uma função
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa a biblioteca 'web-vitals' dinamicamente
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Chama as funções de medição de desempenho, passando onPerfEntry como callback
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

// Exporta a função para que possa ser utilizada em outros arquivos
export default reportWebVitals;
