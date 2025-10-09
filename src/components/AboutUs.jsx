import React from 'react';
import '../styles/AboutUs.css';
 // Importa o arquivo de estilo
import integrantes from '../assets/integrantes.jpeg'
import IconeEducacao from '../assets/educacao.jpg'; 
import IconeTrabalho from '../assets/trabalho.jpg'; 
import IconeFamilia from '../assets/familia.jpg'; 

// OBS: Em um projeto real, substitua as URLs placeholder
// por importações corretas de imagens (ex: import teamPhoto from '...';)

const AboutUs = () => {
    return (
        <div className="about-us-container">
            
            
            

            {/* Nossa História e Equipe (Lado a Lado) */}
            <section className="history-section">
                
                {/* Texto: Trajetória e Missão */}
                <div className="text-content">
                    <h2>Nossa Trajetória e Missão</h2>
                    <p>Olá. Somos estudantes do último ano do curso de Tecnologia da Informação e desenvolvemos este projeto com o objetivo de promover inclusão digital por meio da recuperação e doação de equipamentos eletrônicos.

A proposta surgiu a partir da observação de dois problemas: o descarte inadequado de eletrônicos que ainda têm potencial de uso e a dificuldade de acesso à tecnologia enfrentada por muitas pessoas em situação de vulnerabilidade social. Unindo esses dois pontos, criamos uma solução que alia sustentabilidade, responsabilidade social e inovação</p>
                    <p>Nosso sistema facilita o recolhimento de dispositivos usados, que passam por triagem e reparos técnicos antes de serem destinados a quem mais precisa. Acreditamos que, por meio da tecnologia, é possível criar oportunidades reais de aprendizado, trabalho e conexão com o mundo.

Mais do que um projeto acadêmico, esta iniciativa representa nosso compromisso com a transformação social e o uso consciente da tecnologia.</p>
                    
                    {/* <a href="/doar" className="cta-button primary">Saiba Como Doar Agora</a> */}
                </div>

                {/* Imagem: Equipe */}
                <div className="image-content">
                    {/* Substitua a URL placeholder pela URL da foto real da sua equipe */}
                    <img 
                        src={integrantes} alt="Foto dos integrantes da iniciativa de doação de eletrônicos." 
                        className="team-photo"
                    />
                </div>
            </section>

            <hr className="divider" />

            {/* Histórias de Impacto (Grid) */}
            <section className="impact-stories">
                <h2>Histórias que Transformam Vidas</h2>
                <div className="story-cards">
                    
                {/* CARD 1: Educação */}
            <div className="card2">
                {/* Substituindo <span className="icon2">📚</span> pela tag <img> */}
                <img src={IconeEducacao} alt="Ícone de Livros" className="icon-image" />
                <h3>Acesso à Educação</h3>
                <p>Graças ao notebook doado, vitor, pôde iniciar seu curso EAD de técnico de enfermagem, um sonho que antes parecia inalcançável por falta de equipamento.</p>
            </div>
            
            {/* CARD 2: Trabalho */}
            <div className="card2">
                {/* Substituindo <span className="icon2">💼</span> pela tag <img> */}
                <img src={IconeTrabalho} alt="Ícone de Pasta de Trabalho" className="icon-image" />
                <h3>Oportunidade de Trabalho</h3>
                <p>João recebeu um computador que o permitiu completar o currículo e realizar entrevistas online, garantindo seu primeiro emprego formal.</p>
            </div>
            
            {/* CARD 3: Família */}
            <div className="card2">
                {/* Substituindo <span className="icon2">👨‍👩‍👧‍👦</span> pela tag <img> */}
                <img src={IconeFamilia} alt="Ícone de Família" className="icon-image" />
                <h3>Conexão Familiar</h3>
                <p>O tablet doado permitiu que a Rafaela usasse plataformas de vídeo para se reconectar com parentes que moram em outros estados, diminuindo a saudade.</p>
            </div>

                </div>
            </section>
        </div>
    );
};

export default AboutUs;