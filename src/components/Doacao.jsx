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
            </header>
            
            <section className="about-section">
                <span className="text-part left"><h1>Sobre</h1></span>
                <span className="text-part right"><h1>o Projeto</h1></span>
                <p>O descarte inadequado de lixo eletrônico (e-lixo) libera substâncias tóxicas como chumbo, mercúrio e cádmio, prejudicando o meio ambiente,
                    a saúde pública e a biodiversidade. Frente a esse desafio, a doação de eletrônicos surge como alternativa 
                    sustentável: reduz o impacto ambiental e promove inclusão digital ao destinar computadores, celulares e TVs para quem mais precisa.</p>
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