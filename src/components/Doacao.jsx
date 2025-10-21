import React from 'react';
import '../styles/Doacao.css';

// Importe as imagens da galeria e dos ícones

import imagem1 from '../assets/eletronicos (2).png'; // Substitua pelo caminho correto da imagem
import imagem2 from '../assets/ia (2).png'; // Substitua pelo caminho correto da imagem

import bicicleta from '../assets/bicicleta.jpg'; // Substitua pelo caminho correto da imagem da bicicleta
import smartphone from '../assets/Smartphone.jpg'; // Substitua pelo caminho correto da imagem do smartphone
import console from '../assets/console.jpg'; // Substitua pelo caminho correto da imagem do console
import foneOuvido from '../assets/Fone de ouvido.jpg'; // Substitua pelo caminho correto da imagem do fone de ouvido
import notebook from '../assets/Notebook usado.jpg'; // Substitua pelo caminho correto da imagem do notebook
import relogio from '../assets/Relógio digital.jpg'; // Substitua pelo caminho correto da imagem do relógio
import roteador from '../assets/Roteador.jpg'; // Substitua pelo caminho correto da imagem do roteador
import monitor from '../assets/Monitor.jpg'; // Substitua pelo caminho correto da imagem do monitor
import caixasSom from '../assets/Caixas de Som.jpg'; // Substitua pelo caminho correto da imagem das caixas de som
import tecladoMouse from '../assets/Teclados e Mouses.jpg'; // Substitua pelo caminho correto da imagem do teclado e mouse

import robotHandPhone from '../assets/receber.png'; // Substitua pelo caminho da imagem da mão robô segurando o celular
import robotHandBox from '../assets/levar.png'; // Substitua pelo caminho da imagem da mão robô segurando a caixa


const products = [
    { id: 1, title: 'Bicicleta urbana', image: bicicleta },
    { id: 2, title: 'Smartphone modelo X', image: smartphone },
    { id: 3, title: 'Console retrô', image: console },
    { id: 4, title: 'Fone de ouvido', image: foneOuvido },
    { id: 5, title: 'Notebook usado', image: notebook },
    { id: 7, title: 'Relógio moderno', image: relogio },
    { id: 10, title: 'Roteador', image: roteador },
    { id: 11, title: 'Monitor', image: monitor },
    { id: 14, title: 'Caixas de Som', image: caixasSom },
    { id: 15, title: 'Teclados e Mouses', image: tecladoMouse }, // Corrigi o ID duplicado
];




const Doacao = () => {
    return (
        <div className="doacao-page">
       {/* Substituição da about-section */}
            <section className="about-section">
                 {/* TEXTO ESQUERDA */}
                <div className="text-box">
                <h1>Doar é <span class="changing-word"></span></h1>
                        <p>
                                A doação de eletrônicos promove inclusão digital, reduz o lixo eletrônico
                                e transforma vidas ao dar um novo destino a produtos que ainda podem ser úteis.</p>
                </div>  
            <div className="images">
                <img src={imagem2} alt="Imagem 2" className="img2" /> <img src={imagem1} alt="Imagem 1" className="img1" /></div>
            </section>

                <section className="how-it-works-section">
                <h2 className="section-title">Como funciona</h2>
                <div className="steps-container">
                    
                    {/* Passo 1: Doação */}
                    <div className="step-container step-1">
                        <div className="image-container">
                            <img src={robotHandPhone} alt="Mão robô segurando celular" className="step-image" />
                        </div>
                        <div className="step-content">
                            <div className="line"></div>
                            <p className="text-content">VOCE DOA OS ELETRODOMÉSTICOS E NOS COLETAMOS</p>
                        </div>
                    </div>

                    {/* Passo 2: Coleta */}
                    <div className="step-container step-2">
                        <div className="image-container">
                            <img src={robotHandBox} alt="Mão robô segurando caixa" className="step-image" />
                        </div>
                        <div className="step-content">
                            <div className="line"></div>
                            <p className="text-content">Nos coletamos e levamos até o beneficiário</p>
                        </div>
                    </div>

                    {/* Passo 3: Entrega */}
                    <div className="step-container step-3">
                        <div className="image-container">
                            <img src={robotHandBox} alt="Mão robô segurando caixa" className="step-image" />
                        </div>
                        <div className="step-content">
                            <div className="line"></div>
                            <p className="text-content">Nos entregamos para o recebedor</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Substituímos a gallery-section pelo Marketplace Neon */}
            <section className="gallery-section">
                <h2>Eletronicos para doação</h2>
                <div className="marketplace">
                    {products.map(product => (
                        <div key={product.id} className="card">
                            <img src={product.image} alt={product.title} />
                            <div className="card-info">
                                <h3>{product.title}</h3>
                                <div className="buttons">
                                    <button>❤️</button>
                                    <button>💬</button>
                                    <button>💭</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Doacao;
