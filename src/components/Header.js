import React from 'react';
import '../styles/Header.css';
import logo from '../assets/images/doacao_logo.png'; // Substitua pelo caminho da sua logo

const Header = () => {
    return (
        <header className="main-header">
            <div className="logo-container">
                <img src={logo} alt="Logo Doação" className="logo" />
                <span className="logo-text">DOAÇÃO</span>
            </div>
            <nav className="header-nav">
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#galeria">Galeria</a></li>
                    <li><a href="#como-funciona">Como Funciona</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;