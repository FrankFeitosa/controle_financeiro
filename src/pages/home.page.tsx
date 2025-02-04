// Home.tsx
function Home() {
    return (
        <div className="p-8 bg-zinc-900 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-white">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white">Despesas</h2>
                        <span className="text-green-400">↑ 12%</span>
                    </div>
                    <p className="text-4xl font-bold mt-2 text-white">R$ 1.500</p>
                    <p className="text-sm text-zinc-300">Últimos 30 dias</p>
                </div>
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white">Receitas</h2>
                        <span className="text-green-400">↑ 18%</span>
                    </div>
                    <p className="text-4xl font-bold mt-2 text-white">R$ 2.400</p>
                    <p className="text-sm text-zinc-300">Últimos 30 dias</p>
                </div>
            </div>

            {/* Gráfico */}
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
                <h2 className="text-lg font-semibold mb-4 text-white">Detalhes</h2>
                <div className="h-64 bg-zinc-600 rounded-lg flex items-center justify-center">
                    <span className="text-zinc-300">Gráficos ficarão aqui</span>
                </div>
            </div>

            
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-lg font-semibold mb-4 text-white">Transações Recentes</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="text-left py-3 text-zinc-300">ID</th>
                                <th className="text-left py-3 text-zinc-300">Nome</th>
                                <th className="text-left py-3 text-zinc-300">Data</th>
                                <th className="text-left py-3 text-zinc-300">Valor</th>
                                <th className="text-left py-3 text-zinc-300">Tipo</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-zinc-700/20 transition-colors duration-200">
                                <td className="py-3 text-white">#12345</td>
                                <td className="py-3 text-white">Salário</td>
                                <td className="py-3 text-white">10/10/2023</td>
                                <td className="py-3 text-white">R$ 2.400</td>
                                <td className="py-3 text-green-400">Receita</td>
                            </tr>
                            <tr className="hover:bg-zinc-700/20 transition-colors duration-200">
                                <td className="py-3 text-white">#12346</td>
                                <td className="py-3 text-white">Compras do mês</td>
                                <td className="py-3 text-white">11/10/2023</td>
                                <td className="py-3 text-white">R$ 800</td>
                                <td className="py-3 text-red-400">Despesa</td>
                            </tr>
                            <tr className="hover:bg-zinc-700/20 transition-colors duration-200">
                                <td className="py-3 text-white">#12347</td>
                                <td className="py-3 text-white">Moto</td>
                                <td className="py-3 text-white">12/10/2023</td>
                                <td className="py-3 text-white">R$ 700</td>
                                <td className="py-3 text-red-400">Despesa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;