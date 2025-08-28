import React, { useState } from 'react';
import '../styles/Login.css';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import fullMoonIcon from '../assets/full-moon.png'; // Importe o ícone da lua cheia
import crescentMoonIcon from '../assets/crescent-moon.png'; // Importe o ícone da lua minguante

const Login = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isFullMoon, setIsFullMoon] = useState(true);

    const handleToggleForm = () => {
        setIsLogin(!isLogin);
        setIsFullMoon(!isFullMoon);
    };

    const handleSubmit = () => {
        // Lógica de autenticação ou cadastro
        // Após a autenticação, chame a função onLogin
        onLogin();
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="toggle-moon-container">
                    <img
                        src={isFullMoon ? fullMoonIcon : crescentMoonIcon}
                        alt="Trocar modo"
                        className="moon-icon"
                        onClick={handleToggleForm}
                    />
                    <span className="toggle-text">
                        {isLogin ? 'Cadastro' : 'Sair'}
                    </span>
                </div>
                <h2 className="title">{isLogin ? 'LOGIN' : 'CADASTRO'}</h2>
                <input type="text" placeholder="Email ou username" />
                <input type="password" placeholder="Password" />

                {!isLogin && (
                    <>
                        <input type="text" placeholder="Nome" />
                        <input type="tel" placeholder="Telefone" />
                        <input type="text" placeholder="CPF" />
                        <input type="text" placeholder="CEP" />
                        <input type="text" placeholder="Rua" />
                        <input type="text" placeholder="Cidade" />
                        <input type="password" placeholder="Confirmação de senha" />
                    </>
                )}

                {isLogin && (
                    <div className="social-login">
                        <p>OU</p>
                        <div className="social-icons">
                            <img src={googleIcon} alt="Google" />
                            <img src={facebookIcon} alt="Facebook" />
                            <img src={twitterIcon} alt="Twitter" />
                        </div>
                    </div>
                )}
                <button className="submit-button" onClick={handleSubmit}>
                    {isLogin ? 'Entrar' : 'Cadastrar'}
                </button>
            </div>
        </div>
    );
};

export default Login;