import React, { useEffect, useState } from 'react'; // Importa React e hooks
import Logo from '../assets/img/logo.png'; // Importa logo
import PersonIcon from '../assets/img/personicon.svg'; // Importa ícone de usuário

const HeaderNav = () => {
  const [userName, setUserName] = useState(''); // Estado para armazenar o nome do usuário

  useEffect(() => {
    // Função para buscar o nome do usuário
    const fetchUserName = async () => {
      const userId = localStorage.getItem('userId'); // Obtém o ID do usuário do localStorage
      if (!userId) {
        console.error('User ID not found in localStorage');
        return;
      }

      try {
        const response = await fetch(`http://192.168.1.13:5000/usuarios/${userId}`); // Requisição para buscar os dados do usuário
        const data = await response.json();
        setUserName(data.senha); // Assume que "senha" é o nome do usuário
      } catch (error) {
        console.error('Error fetching user data:', error); // Log de erro
      }
    };

    fetchUserName(); // Chama a função para buscar o nome do usuário
  }, []); 

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-nowrap items-center justify-around max-w-screen-xl p-4 mx-auto">
          <div className='flex flex-nowrap md:flex-wrap'>
            <a 
              target="_blank" 
              href="http://colegiocomercialcpv.com.br/"
              className="flex items-center space-x-3 rtl:space-x-reverse transition-all hover:scale-105 hover:mx-2" 
              rel="noreferrer"
            >
              <img src={Logo} alt="Logo" className="w-auto h-12" />
              <p className="text-wrap block px-3 py-2 text-gray-900 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500">
                Colégio Comercial de Caçapava
              </p>
            </a>
            <a 
              href="/inicio"
              className="flex items-center space-x-3 rtl:space-x-reverse transition-all hover:scale-105 sm:ml-2 md:ml-6" 
              rel="noreferrer"
            >
              <p className="text-wrap block px-3 py-2 text-gray-900 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 hover:underline decoration-green-800">
                Início
              </p>
            </a>
          </div>
          <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse bg-white text-black">
            <button 
              type="button"
              className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-400 bg-white transition-all hover:scale-105 hover:mx-2"
              id="user-menu-button" 
              aria-expanded="false" 
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <p className='z-10 bg-white text-black mx-1 mt-1 font-semibold'>{userName}</p>
              <span className="sr-only">Open user menu</span>
              <img src={PersonIcon} alt="Logo" className="w-8 h-8 bg-white border-none rounded-full outline-none" />
            </button>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Comercial</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a 
                    href="" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Trocar de conta
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center justify-around hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* Adicione links de navegação aqui, se necessário */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNav; // Exporta o componente
