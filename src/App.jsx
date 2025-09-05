import React, { useState } from 'react';
import Login from './components/Login';
import Doacao from './components/Doacao';
import Sidebar from './components/Sidebar';
import ProfilePage from './components/ProfilePage';

import './styles/App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

    const handleLogin = () => {
        setIsLoggedIn(true);
        setCurrentPage('home'); // Redireciona para a página principal após o login
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavigation = (page) => {
        setCurrentPage(page);
        setIsSidebarOpen(false); // Fecha a sidebar após a navegação
    };

    const renderContent = () => {
        switch (currentPage) {
            case 'home':
                return <Doacao />;
            case 'profile':
                return <ProfilePage toggleSidebar={toggleSidebar} />;
            // Adicione outras páginas aqui conforme necessário
            default:
                return <Doacao />;
        }
    };

    return (
        <div className="App">
            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <>
                    <button className="sidebar-toggle" onClick={toggleSidebar}>
                        ☰
                    </button>
                    <Sidebar 
                        isSidebarOpen={isSidebarOpen} 
                        onNavigate={handleNavigation} 
                    />
                    <main className="main-content">
                        {renderContent()}
                    </main>
                </>
            )}
        </div>
    );
}

export default App;
