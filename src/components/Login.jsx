import React, { useState } from 'react';
import '../styles/Login.css';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';

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
                
                <div className="social-login">
                    <p>OU</p>
                    <div className="social-icons">
                        <img src={googleIcon} alt="Google" />
                        <img src={facebookIcon} alt="Facebook" />
                        <img src={twitterIcon} alt="Twitter" />
                    </div>
                </div>

                <button className="toggle-button" onClick={handleToggleForm}>
                    {isLogin ? 'Trocar para Cadastro' : 'Trocar para Login'}
                </button>
                <button className="submit-button" onClick={handleSubmit}>
                    {isLogin ? 'Entrar' : 'Cadastrar'}
                </button>
            </div>
        </div>
    );
};

export default Login;