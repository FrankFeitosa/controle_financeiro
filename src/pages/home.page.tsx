import { useState } from 'react';
import { ChartBar, TrendingUp, TrendingDown } from 'lucide-react';
import DashboardHeader from "../components/home/dashboard/DashboardHeader";
import DashboardCards from "../components/home/dashboard/DashboardCards";
import FinancialChart from "../components/home/dashboard/FinancialChart";
import TransactionsTable from "../components/home/TransactionsTable";
import dataTransactions from "../data/transactions.data";
import { calculateTotals } from "../lib/finance";
import { chartDataReceita, chartDataDespesa, chartDataSaldo } from "../data/chart.data";

const Home = () => {
  const [chartData, setChartData] = useState(chartDataReceita.datas);
  const [chartType, setChartType] = useState(chartDataReceita.description);
  const { receita, despesa, saldo } = calculateTotals(dataTransactions);

  const chartButtons = [
    {
      label: 'Receita',
      data: chartDataReceita.datas,
      type: chartDataReceita.description,
      icon: <TrendingUp className="mr-2 text-green-500" />,
      bgColor: 'bg-green-50 hover:bg-green-100 text-green-600'
    },
    {
      label: 'Despesa',
      data: chartDataDespesa.datas,
      type: chartDataDespesa.description,
      icon: <TrendingDown className="mr-2 text-red-500" />,
      bgColor: 'bg-red-50 hover:bg-red-100 text-red-600'
    },
    {
      label: 'Saldo',
      data: chartDataSaldo.datas,
      type: chartDataSaldo.description,
      icon: <ChartBar className="mr-2 text-blue-500" />,
      bgColor: 'bg-blue-50 hover:bg-blue-100 text-blue-600'
    }
  ];

  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />

        <DashboardCards
          receitaValor={receita.receitaValor}
          despesaValor={despesa.despesaValor}
          saldoValor={saldo.saldoValor}
        />

        <div className="bg-zinc-800 rounded-xl shadow-lg p-6 mt-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <h2 className="text-xl font-bold mb-4 md:mb-0">Análise Financeira</h2>
            <div className="flex items-center space-x-2">
              {chartButtons.map((button) => (
                <button
                  key={button.label}
                  className={`
                    flex items-center px-4 py-2 rounded-lg transition-all duration-300 
                    ${button.bgColor} 
                    ${chartData === button.data ? 'ring-2 ring-opacity-50 ring-white' : ''}
                  `}
                  onClick={() => {
                    setChartData(button.data);
                    setChartType(button.type);
                  }}
                >
                  {button.icon}
                  {button.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-lg p-4">
            <FinancialChart data={chartData} description={chartType} />
          </div>
        </div>

        <div className="mt-8 bg-zinc-800 rounded-xl shadow-lg p-6">
          <TransactionsTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
