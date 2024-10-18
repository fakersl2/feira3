import React from 'react'; // Importa o React

const Gradient = () => {
    return (
        // Container principal com gradiente de fundo
        <div className="z-0 py-16 text-center text-white transition-all h-fit max-w-screen w-dvw bg-gradient-to-b from-green-400 via-green-500 to-green-600 overflow-hidden">
            <div className="flex flex-col items-center py-10 mx-auto">
                {/* Título principal */}
                <h1 className="z-10 text-4xl font-extrabold sm:text-5xl dark:text-white">Feira de Ciências</h1>
                {/* Descrição do evento */}
                <p className="w-full max-w-4xl mt-2 text-center text-gray-100 sm:text-lg">
                    A Feira de Ciências do Colégio Comercial de Caçapava é um projeto realizado com os alunos para
                    colocar à mostra alguns dos conhecimentos adquiridos durante o ano letivo.
                </p>
            </div>
        </div>
    );
}

export default Gradient; // Exporta o componente Gradient
