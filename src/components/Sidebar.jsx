// src/components/Sidebar.js

import React from 'react';
import '../styles/Sidebar.css';
import userPic from '../assets/user_profile.jpg';

const Sidebar = ({ isSidebarOpen }) => {
    const user = {
        name: 'Nome do Usuário',
        email: 'email@exemplo.com',
        profilePicture: userPic,
    };

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="profile-info">
                <img src={user.profilePicture} alt="Foto de Perfil" className="profile-pic" />
                {/* LINHAS CORRIGIDAS ABAIXO */}
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Minhas Doações</a></li>
                    <li><a href="#">Histórico</a></li>
                    <li><a href="#">Configurações</a></li>
                    <li><a href="#">Sair</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;