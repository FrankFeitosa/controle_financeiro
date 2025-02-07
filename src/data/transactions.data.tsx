import { v4 as uuidv4 } from 'uuid'; // importando a lib para gerar IDs 

// Interface para os dados das transações
export interface TransactionData {
    id: string;
    descricao: string;
    tipo: 'Receita' | 'Despesa';
    valor: number;
    data: string;
    tags: string[];
}

const dataTransactions: TransactionData[] = [
    {
        id: uuidv4(),
        descricao: "Salário Mensal",
        tipo: "Receita",
        valor: 10040,
        data: "2023-12-01",
        tags: ["salário", "trabalho", "fixo"]
    },
    {
        id: uuidv4(),
        descricao: "Aluguel do Apartamento",
        tipo: "Despesa",
        valor: 2500,
        data: "2023-12-05",
        tags: ["moradia", "fixo"]
    },
    {
        id: uuidv4(),
        descricao: "Conta de Energia",
        tipo: "Despesa",
        valor: 320,
        data: "2023-12-07",
        tags: ["moradia", "fixo"]
    },
    {
        id: uuidv4(),
        descricao: "Conta de Água",
        tipo: "Despesa",
        valor: 150,
        data: "2023-12-08",
        tags: ["moradia", "fixo"]
    },
    {
        id: uuidv4(),
        descricao: "Supermercado Mensal",
        tipo: "Despesa",
        valor: 950,
        data: "2023-12-10",
        tags: ["alimentação", "mercado", "fixo"]
    },
    {
        id: uuidv4(),
        descricao: "Mensalidade Academia",
        tipo: "Despesa",
        valor: 199,
        data: "2023-12-12",
        tags: ["saúde", "fitness", "fixo"]
    },
    {
        id: uuidv4(),
        descricao: "Gasolina",
        tipo: "Despesa",
        valor: 280,
        data: "2023-12-14",
        tags: ["transporte", "veículo", "fixo"]
    },
    {
        id: uuidv4(),
        descricao: "Assinatura Netflix",
        tipo: "Despesa",
        valor: 55,
        data: "2023-12-15",
        tags: ["entretenimento", "streaming"]
    },
    {
        id: uuidv4(),
        descricao: "Compra de Roupas",
        tipo: "Despesa",
        valor: 450,
        data: "2023-12-18",
        tags: ["vestuário", "compras"]
    },
    {
        id: uuidv4(),
        descricao: "Freelance Desenvolvimento Web",
        tipo: "Receita",
        valor: 1800,
        data: "2023-12-20",
        tags: ["trabalho", "freelance"]
    },
    {
        id: uuidv4(),
        descricao: "Seguro do Carro",
        tipo: "Despesa",
        valor: 100,
        data: "2023-12-22",
        tags: ["transporte", "seguro", "fixo"]
    },
    {
        id: uuidv4(),
        descricao: "Restaurante com Amigos",
        tipo: "Despesa",
        valor: 230,
        data: "2023-12-23",
        tags: ["alimentação", "lazer"]
    },
    {
        id: uuidv4(),
        descricao: "Investimento em Ações",
        tipo: "Receita",
        valor: 800,
        data: "2023-12-25",
        tags: ["investimento", "financeiro"]
    }
];

export default dataTransactions;



