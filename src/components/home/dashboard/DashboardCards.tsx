// Esse componente serve para renderizar os cards do dashboard
import Card from "../../home/Card"; 


interface DashboardCardsProps {
  receitaValor: number;
  despesaValor: number;
  saldoValor: number;
}

// DashboardCards recebe tres parametros, sendo eles o valor de receita, despesa e saldo
const DashboardCards = ({ receitaValor, despesaValor, saldoValor }: DashboardCardsProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    <Card tipo="Receita" valor={receitaValor} />
    <Card tipo="Despesa" valor={despesaValor} />
    <Card tipo="Saldo" valor={saldoValor} />
  </div>
);

export default DashboardCards;
