// Router.tsx
import { Route, Routes } from 'react-router-dom';

// Importando as páginas
import Home from './pages/home.page';
import Transactions from './pages/transactions.page';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
        </Routes>
    );
}