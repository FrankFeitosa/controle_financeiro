// Dados fictícios para os gráficos

import dataTransactions from "../data/transactions.data";
import { calculateTotals } from "../lib/finance";

// Calcula os totais com base nas transações
const { receita, despesa, saldo } = calculateTotals(dataTransactions);

// Array com os nomes dos meses
const monthNames = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];

/**
 * Converte o valor do mês (número) para o nome correspondente.
 * Se o valor vem de 1 a 12, subtrai 1 para obter o índice correto no array.
 */
const getMonthName = (month: number): string => {
  const monthIndex = month - 1;
  return monthNames[monthIndex];
};

// Obtém o nome do mês para cada tipo, baseado na propriedade de cada total
const monthNameReceita = getMonthName(receita.receitaMes);
const monthNameDespesa = getMonthName(despesa.despesaMes);
const monthNameSaldo   = getMonthName(saldo.saldoMes);

// Dados estáticos para cada gráfico com estrutura unificada
// Utilizamos os meses de "Jun" a "Nov" para os dados fixos e, em seguida, adicionamos o valor calculado
export const chartDataReceita = {
  description: "Receita",
  datas: [
    { month: "Jun", value: 4230 },
    { month: "Jul", value: 5000 },
    { month: "Ago", value: 4000 },
    { month: "Set", value: 6700 },
    { month: "Out", value: 6400 },
    { month: "Nov", value: 7800 },
    // Adiciona o valor total calculado com o mês obtido dinamicamente
    { month: monthNameReceita, value: receita.receitaValor },
  ],
};

export const chartDataDespesa = {
  description: "Despesa",
  datas: [
    { month: "Jun", value: 3000 },
    { month: "Jul", value: 4000 },
    { month: "Ago", value: 5000 },
    { month: "Set", value: 6000 },
    { month: "Out", value: 7000 },
    { month: "Nov", value: 8000 },
    // Adiciona o valor total calculado com o mês obtido dinamicamente
    { month: monthNameDespesa, value: despesa.despesaValor },
  ],
};

export const chartDataSaldo = {
  description: "Saldo",
  datas: [
    // Calcula o saldo para cada mês fixo, garantindo que os índices correspondam entre receita e despesa
    { month: "Jun", value: chartDataReceita.datas[0].value - chartDataDespesa.datas[0].value },
    { month: "Jul", value: chartDataReceita.datas[1].value - chartDataDespesa.datas[1].value },
    { month: "Ago", value: chartDataReceita.datas[2].value - chartDataDespesa.datas[2].value },
    { month: "Set", value: chartDataReceita.datas[3].value - chartDataDespesa.datas[3].value },
    { month: "Out", value: chartDataReceita.datas[4].value - chartDataDespesa.datas[4].value },
    { month: "Nov", value: chartDataReceita.datas[5].value - chartDataDespesa.datas[5].value },
    // Adiciona o saldo total calculado com o mês obtido dinamicamente
    { month: monthNameSaldo, value: saldo.saldoValor },
  ],
};
