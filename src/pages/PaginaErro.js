import React from 'react' // Importa a biblioteca React

const PaginaErro = () => {
    return (
        <div>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                {/* Main utiliza grid para centralizar o conteúdo vertical e horizontalmente */}
                <div className="text-center">
                    <p className="text-base font-semibold text-green-600 transition-all hover:scale-125 ease-in-out cursor-default">404</p>
                    {/* Exibe o código de erro 404 com efeito de escala ao passar o mouse */}
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl transition-all hover:scale-105 ease-in-out cursor-default">Página não encontrada</h1>
                    {/* Título da página com um efeito de escala semelhante */}
                    <p className="mt-6 text-base leading-7 text-gray-600 transition-all hover:scale-105 ease-in-out cursor-default">Ops... Não foi possível encontrar a página, verifique se a URL está correta.</p>
                    {/* Mensagem informativa sobre o erro */}
                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <a href="/Login" className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all hover:shadow-lg hover:scale-125 ease-in-out">
                            {/* Botão para voltar à página de login, estilizado com efeitos visuais */}
                            Voltar à página de Login
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PaginaErro; // Exporta o componente PaginaErro para ser utilizado em outras partes da aplicação
