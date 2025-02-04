import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, TrendingUp, Settings } from 'lucide-react';

const Nav: React.FC = () => {
    const location = useLocation();
    const path = location.pathname;

    const navItems = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/transactions', label: 'Transações', icon: TrendingUp },
        { path: '/settings', label: 'Configurações', icon: Settings }
    ];

    return (
        <nav className="w-64 bg-zinc-900 text-white h-screen fixed left-0 top-0 shadow-xl flex flex-col">
            <div className="p-6 border-b border-zinc-800">
                <h1 className="text-2xl font-bold text-center tracking-tight">
                    COFRE DIGITAL 
                </h1>
            </div>
            <ul className="flex-grow py-4 space-y-2">
                {navItems.map((item) => (
                    <li key={item.path} className="px-4">
                        <Link 
                            to={item.path}
                            className={`
                                flex items-center p-3 rounded-lg transition-all duration-300 ease-in-out
                                ${path === item.path 
                                    ? 'bg-zinc-700 text-white' 
                                    : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'}
                            `}
                        >
                            <item.icon className="mr-3" size={20} />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="p-4 border-t border-zinc-800 text-center text-xs text-zinc-500">
                © {new Date().getFullYear()} Cofre Digital
            </div>
        </nav>
    );
}

export default Nav;