import React, { useState } from 'react';
import Login from './components/Login';
import Doacao from './components/Doacao';
import Sidebar from './components/Sidebar';
import './styles/App.css'; 

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="App">
            {isLoggedIn ? (
                <>
                    <button className="sidebar-toggle" onClick={toggleSidebar}>
                        ☰ {/* Ícone de hambúrguer */}
                    </button>
                    <Sidebar isSidebarOpen={isSidebarOpen} />
                    <Doacao />
                </>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
