import React, { useState } from 'react';
import '../styles/Login.css';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/icon-apple1.png';

const Login = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = () => {
        // Lógica de autenticação ou cadastro
        // Após a autenticação, chame a função onLogin
        onLogin();
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="title">{isLogin ? 'LOGIN' : 'CADASTRO'}</h2>
                <input type="text" placeholder="Email ou username" />
                <input type="password" placeholder="Password" />

                {!isLogin && (
                    <>
                        <input type="text" placeholder="Nome" />
                        <input type="tel" placeholder="Telefone" />
                        <input type="text" placeholder="CPF" />
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
                <div className="toggle-text-container">
                    <span className="toggle-text" onClick={handleToggleForm}>
                        {isLogin ? 'Criar Conta?' : 'Já tem conta? Entrar'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;