import React from 'react'; // Importa o React, necessário para criar componentes React
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM, que permite renderizar componentes React no DOM
import './index.css'; // Importa o arquivo CSS global para estilização da aplicação
import App from './App'; // Importa o componente principal App da aplicação
import reportWebVitals from './reportWebVitals'; // Importa uma função para medir o desempenho da aplicação

// Cria um root para renderização, selecionando o elemento com ID 'root' do HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do StrictMode, que ajuda a identificar problemas potenciais na aplicação
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você quiser começar a medir o desempenho da sua aplicação, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals(); // Chama a função para iniciar a medição de desempenho
