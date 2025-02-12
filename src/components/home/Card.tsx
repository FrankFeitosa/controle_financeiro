// Componente Card
import { CreditCard, DollarSign, Wallet, TriangleAlert } from "lucide-react";

// Interface para as propriedades do componente
interface CardProps {
    tipo: "Despesa" | "Receita" | "Saldo";
    valor: number; // Valor monetário
    porcentagem?: number; // Porcentagem de variação (opcional)
}

function Card({ tipo, valor }: CardProps) {
    /**
     * Retorna o ícone adequado de acordo com o tipo e o valor.
     * - Para "Despesa": exibe um ícone de cartão de crédito em vermelho.
     * - Para "Receita": exibe um ícone de cifrão em verde.
     * - Para "Saldo": se o valor for negativo, exibe um alerta (TriangleAlert) em vermelho; caso contrário, exibe o ícone de carteira em azul.
     */
    const getIcon = (): JSX.Element | null => {
        switch (tipo) {
            case "Despesa":
                return <CreditCard className="w-6 h-6 text-red-400" />;
            case "Receita":
                return <DollarSign className="w-6 h-6 text-green-400" />;
            case "Saldo":
                return valor < 0 ? (
                    <div className="flex items-center gap-2">
                        <TriangleAlert className="w-6 h-6 text-red-400" />
                        <span className="text-xs text-red-400">Voce tem um saldo negativo</span>
                    </div>

                ) : (
                    <Wallet className="w-6 h-6 text-blue-400" />
                );
            default:
                return null;
        }
    };

    // Formata o valor para a moeda brasileira
    const formattedValue: string = valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return (
        <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-700/50 backdrop-blur-xl p-6 rounded-2xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
                <span className="p-2 bg-zinc-700/20 rounded-xl">
                    {getIcon() /* Renderiza o ícone baseado no tipo e no valor */}
                </span>
            </div>
            <h2 className="text-lg font-medium text-zinc-400">{tipo}</h2> {/* Título dinâmico */}
            <p className="text-3xl font-bold mt-1 text-white">{formattedValue}</p> {/* Valor formatado */}
            <p className="text-sm text-zinc-500 mt-2">Comparado ao mês anterior</p>
        </div>
    );
}

export default Card;
