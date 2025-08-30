import React from 'react';
import '../styles/Sidebar.css';
import userPic from '../assets/user_profile.jpg';

const Sidebar = ({ isSidebarOpen, onNavigate }) => {
    const user = {
        name: 'Nome do Usuário',
        email: 'email@exemplo.com',
        profilePicture: userPic,
    };

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="profile-info">
                <img src={user.profilePicture} alt="Foto de Perfil" className="profile-pic" />
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    {/* Alterado para usar a prop onNavigate */}
                    <li><a href="#" onClick={() => onNavigate('profile')}>perfil</a></li>
                    <li><a href="#" onClick={() => onNavigate('home')}>Minhas Doações</a></li>
                    <li><a href="#" onClick={() => onNavigate('home')}>Histórico</a></li>
                    <li><a href="#" onClick={() => onNavigate('home')}>Configurações</a></li>
                    <li><a href="#" onClick={() => onNavigate('login')}>Sair</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
