import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../assets/img/logobranca.webp';

const Cadastro = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const nome = "";
        const senha = event.target.password.value;

        try {
            const response = await axios.post('https://feira3-back.vercel.app/usuarios', {
                nome,
                senha
            });

            if (response.status === 200) {
                navigate('/login');
            } else {
                // Tratar erro
                console.error('Erro ao cadastrar');
            }
        } catch (error) {
            // Tratar erro
            console.error('Erro ao cadastrar', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 select-none mx-2">
            <div className="flex flex-col w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-md md:flex-row">
                <div className="w-full p-8 md:w-1/2 mt-12" >
                    <div className="flex justify-center mb-8">
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-gray-700 md:text-3xl">Cadastrar</h2>
                    <p className="mb-6 text-sm text-gray-600 md:text-base">Já possui conta? <a href="/login" className="text-green-600 hover:underline">Entrar</a></p>
                    <form onSubmit={handleSubmit} className="bg-white">
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 md:text-base">Código de identificação:</label>
                            <input type="password" id="password" className="w-full px-4 py-2 leading-tight bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-green-600 focus:mt-2 transition-all" placeholder="Este código será seu nome de usuário!" required />
                        </div>

                        <div className="mb-6">
                            <button type="submit" className="flex items-center justify-center w-full px-4 py-2 text-white bg-green-500 border-2 border-gray-200 rounded-lg hover:bg-green-600 transition ease-in-out duration-300">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
                        {/* Espaço para Imagem */}
                <div className="hidden md:block md:w-1/2">
                    <div className="object-cover w-full h-full bg-green-500">
                        <img src={Logo} className='w- h-2/3 mx-auto relative top-1/2 ' style={{transform: "translateY(-50%)"}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;
