import { render, screen } from '@testing-library/react'; // Importa funções necessárias da biblioteca de testes para renderizar componentes e acessar elementos
import App from './App'; // Importa o componente App que será testado

// Define um teste com o nome 'renders learn react link'
test('renders learn react link', () => {
  render(<App />); // Renderiza o componente App na árvore do DOM virtual

  // Busca um elemento que contém o texto 'learn react', usando uma expressão regular
  const linkElement = screen.getByText(/learn react/i);

  // Verifica se o elemento encontrado está presente no documento
  expect(linkElement).toBeInTheDocument();
});
