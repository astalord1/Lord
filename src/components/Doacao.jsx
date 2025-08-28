import React from 'react';
import '../styles/Doacao.css';

// Importe as imagens da galeria e dos ícones
import galeria1 from '../assets/galeria_1.jpeg';
import galeria2 from '../assets/galeria_2.png';
import galeria3 from '../assets/galeria_3.jpeg';
import iconeDoar from '../assets/icone_doar.png';
import iconeColetar from '../assets/icone_coletar.png';
import iconeEntregar from '../assets/icone_entregar.png';

const Doacao = () => {
    return (
        <div className="doacao-page">
            <header className="hero-section">
                <h1>Transforme vidas doando seus eletrônicos usados</h1>
                <p>Seus aparelhos podem ajudar estudantes e famílias de baixa renda a se conectarem ao futuro</p>
                <button className="doar-button">QUERO DOAR AGORA</button>
            </header>
            
            <section className="about-section">
                <h2>Sobre o Projeto</h2>
                <p>Doação de Eletrônicos: Uma Solução Sustentável para o Lixo Eletrônico
A cada ano, toneladas de lixo eletrônico, ou e-lixo, são descartadas de forma inadequada, representando uma ameaça crescente ao meio ambiente. Componentes como chumbo, mercúrio e cádmio, presentes em dispositivos como computadores, celulares e televisores, contaminam o solo e a água, impactando a saúde pública e a biodiversidade. No entanto, em meio a essa preocupação, a doação de eletrônicos emerge como uma solução promissora e sustentável, especialmente relevante para o nosso projeto</p>
            </section>

            <section className="gallery-section">
                <h2>Galeria de Fotos</h2>
                <div className="gallery-images">
                    <img src={galeria1} alt="Galeria 1" />
                    <img src={galeria2} alt="Galeria 2" />
                    <img src={galeria3} alt="Galeria 3" />
                </div>
            </section>

            <section className="how-it-works-section">
                <h2>Como Funciona</h2>
                <div className="steps">
                    <div className="step">
                        <img src={iconeDoar} alt="Ícone Doar" />
                        <p>Você doa um eletronico</p>
                    </div>
                    <div className="step">
                        <img src={iconeColetar} alt="Ícone Coletar" />
                        <p>Nós coletamos e-se preciso, consertamos</p>
                    </div>
                    <div className="step">
                        <img src={iconeEntregar} alt="Ícone Entregar" />
                        <p>O equipamento é entregue para quem precisa</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Doacao;