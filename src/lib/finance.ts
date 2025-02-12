import type { TransactionData } from "../data/transactions.data"; // aqui eu importo apenas a tipagem


export function calculateTotals(transactions: TransactionData[]) {
  const receitaValor: number = transactions.reduce((total, transaction) => {
    return transaction.tipo === "Receita" ? total + transaction.valor : total;
  }, 0);

  const despesaValor: number = transactions.reduce((total, transaction) => {
    return transaction.tipo === "Despesa" ? total + transaction.valor : total;
  }, 0);

  const monthOfTransaction: number = Number(transactions[0].data.split("-")[1]);

  return {
    receita: {
      receitaValor: receitaValor,
      receitaMes: monthOfTransaction,
    },
    despesa: {
      despesaValor: despesaValor,
      despesaMes: monthOfTransaction,
    },
    saldo: {
      saldoValor: receitaValor - despesaValor,
      saldoMes: monthOfTransaction,
    },
  };
}
