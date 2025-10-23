import React, { useState } from 'react';
// Usando '..' para voltar ao diretório 'src/' e pegar o 'firebase.js'
import { auth, db } from '../firebase'; 
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
} from 'firebase/auth';
// Importa funções do Firestore
import { doc, setDoc } from 'firebase/firestore'; 

// Mantendo os caminhos originais do seu projeto para CSS e Assets
import '../styles/Login.css'; 
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/icon-apple1.png';


const Login = ({ onLogin }) => {
    // Estado de controle do formulário
    const [isLogin, setIsLogin] = useState(true);
    
    // Estados dos campos de input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Estado para feedback e carregamento
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleToggleForm = () => {
        setIsLogin(!isLogin);
        setError(''); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError('');
        setIsLoading(true);

        try {
            if (isLogin) {
                // --- LÓGICA DE LOGIN ---
                await signInWithEmailAndPassword(auth, email, password);
                console.log("Login de sucesso!");
                onLogin(true); 

            } else {
                // --- LÓGICA DE CADASTRO ---
                if (password !== confirmPassword) {
                    setError("As senhas não coincidem.");
                    setIsLoading(false);
                    return;
                }

                // 1. Cria o usuário no Firebase Auth
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                
                // 2. Salva dados adicionais no Firestore
                // O ID do documento é o UID do usuário (user.uid)
                await setDoc(doc(db, "users", user.uid), {
                    uid: user.uid,
                    name: name,
                    email: email,
                    phone: phone,
                    cpf: cpf,
                    street: street,
                    city: city,
                    createdAt: new Date()
                });

                console.log("Cadastro e dados salvos com sucesso!");
                onLogin(true);
            }
        } catch (error) {
            console.error("Erro na autenticação/Firestore:", error);
            
            // Tratamento de erros do Firebase Auth
            let errorMessage = 'Ocorreu um erro desconhecido. Tente novamente.';
            if (error.code) {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        errorMessage = 'Este email já está cadastrado.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'O formato do email é inválido.';
                        break;
                    case 'auth/operation-not-allowed':
                        errorMessage = 'Login por email/senha não está habilitado no Firebase Console.';
                        break;
                    default:
                        // Para outros erros (incluindo permissão do Firestore)
                        errorMessage = `Erro: ${error.message}`;
                }
            }
            setError(errorMessage);
            
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={handleSubmit}>
                <h2 className="title">{isLogin ? 'LOGIN' : 'CADASTRO'}</h2>
                
                {/* Email (input controlado) */}
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                {/* Senha (input controlado) */}
                <input 
                    type="password" 
                    placeholder="Senha" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />

                {!isLogin && (
                    <>
                        {/* Campos de Cadastro Adicionais (inputs controlados) */}
                        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type="tel" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                        <input type="text" placeholder="Rua" value={street} onChange={(e) => setStreet(e.target.value)} />
                        <input type="text" placeholder="Cidade" value={city} onChange={(e) => setCity(e.target.value)} />
                        <input 
                            type="password" 
                            placeholder="Confirmação de senha" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required 
                        />
                    </>
                )}

                {/* Exibição de Erro */}
                {/* O erro atual do seu print (Erro: As senhas não coincidem.) aparece aqui. */}
                {error && <p style={{ color: 'red', fontSize: '0.9em', textAlign: 'center' }}>{error}</p>}

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
                
                {/* Botão de Submissão */}
                <button 
                    type="submit" 
                    className="submit-button" 
                    disabled={isLoading} 
                >
                    {isLoading ? 'Aguarde...' : (isLogin ? 'Entrar' : 'Cadastrar')}
                </button>
                
                <div className="toggle-text-container">
                    <span className="toggle-text" onClick={handleToggleForm}>
                        {isLogin ? 'Criar Conta?' : 'Já tem conta? Entrar'}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;