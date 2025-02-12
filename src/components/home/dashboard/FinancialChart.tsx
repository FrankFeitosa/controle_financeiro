
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface FinancialChartProps {
  data: { month: string; value: number }[];
  description?: string;
}

const FinancialChart = ({ data, description }: FinancialChartProps) => (
  <div className="bg-gradient-to-br from-zinc-900 to-zinc-900 backdrop-blur-xl p- rounded-2xl  mb-8">
    <div className="flex items-center justify-between mb-6 mx-4">
      <div>
        <h2 className="text-lg font-semibold text-zinc-100">{description}</h2>
        <p className="text-sm text-zinc-400">Análise dos últimos seis meses</p>
      </div>
      <div className="flex items-center space-x-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-700/50 text-zinc-300">
          Mensal
        </span>
      </div>
    </div>
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
      
          
          <XAxis dataKey="month" stroke="#9CA3AF" />
         
          <YAxis
            stroke="#9CA3AF"
            tickFormatter={(value) =>
              new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
              }).format(value)
            }
          />
          {/* Aqui eu estilizo o tooltip do gráfico */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#18181B",
              border: "1px solid #3F3F46",
              borderRadius: "0.5rem",
            }}
            formatter={(value: number) =>
              new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
              }).format(value)
            }
          />
          {/* Adiciona legenda para indicar o que a linha representa */}
          <Legend wrapperStyle={{ color: "#9CA3AF" }} />
          {/* Configura a linha do gráfico */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ fill: "#3B82F6", strokeWidth: 2 }}
            name={description}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default FinancialChart;
