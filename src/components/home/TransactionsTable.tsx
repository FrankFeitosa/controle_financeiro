import dataTransactions from "../../data/transactions.data";
import { cn } from "../../lib/utils";

function TransactionsTable() {

    // Função para formatar o valor
    const valueFormtted = (value: number) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-xl p-6 rounded-2xl border border-zinc-700/50 shadow-lg">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-white">Transações Recentes</h2>
                    <p className="text-sm text-zinc-400">Últimas atividades da sua conta</p>
                </div>
            </div>
            <table className="w-full border-collapse">
                <thead className="sticky top-0 bg-zinc-900/80 backdrop-blur-md">
                    <tr className="border-b border-zinc-700/50">
                        <th className="text-left py-4 px-4 text-zinc-400 font-medium uppercase text-xs">Descrição</th>
                        <th className="text-left py-4 px-4 text-zinc-400 font-medium uppercase text-xs">Tipo</th>
                        <th className="text-left py-4 px-4 text-zinc-400 font-medium uppercase text-xs">Valor</th>
                        <th className="text-left py-4 px-4 text-zinc-400 font-medium uppercase text-xs">Data</th>
                        <th className="text-left py-4 px-4 text-zinc-400 font-medium uppercase text-xs">Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTransactions.map((transacaoAtual) => (
                        <tr
                            key={transacaoAtual.id} // Aqui eu uso o id da transação para identificar cada linha da tabela
                            className="border-b border-zinc-700/30 hover:bg-zinc-800/50 transition-all duration-200"
                        >
                            <td className="py-4 px-4 text-zinc-300">{transacaoAtual.descricao}</td>
                            <td className="py-4 px-4">
                                <span
                                    className={cn(
                                        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
                                        transacaoAtual.tipo === "Receita"
                                            ? "bg-green-500/20 text-green-400"
                                            : "bg-red-500/20 text-red-400"
                                    )}
                                >
                                    {transacaoAtual.tipo}
                                </span>
                            </td>
                            {/* Formatando o valor para BRL usando a função valueFormtted */}
                            <td className="py-4 px-4 font-medium text-white">{valueFormtted(transacaoAtual.valor)}</td>
                            <td className="py-4 px-4 text-zinc-400">{transacaoAtual.data}</td>
                            <td className="py-4 px-4 text-zinc-300 text-sm">
                                {transacaoAtual.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-block bg-zinc-700/40 text-zinc-300 px-2 py-1 rounded-md text-xs font-medium mr-1"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default TransactionsTable;
