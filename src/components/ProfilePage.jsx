import React from 'react';
import '../styles/ProfilePage.css';
import userProfileImage from '../assets/user_profile.jpg';
import TELEFONE from '../assets/TELEFONE.jpeg';
import NOTEBOOK from '../assets/NOTEBOOK.jpeg';

const ProfilePage = ({ toggleSidebar }) => {
  return (
    // Adicione esta div para segurar a imagem de fundo
    <div className="profile-page-background">
      <div className="profile-container">
        {/* Container do cabeçalho com a foto do usuário */}
        <div className="profile-header">
          <img
            src={userProfileImage}
            alt="Foto de Perfil do Igor Silva"
            className="user-profile-pic"
            onClick={toggleSidebar}
          />
          <h1>RAYDON</h1>
          <div className="user-details">
            <p className="email-verified">
              raydon.silva@example.com <span className="verified-status">✓ Verificado</span>
            </p>
            <p className="user-location">maranhao, Brasil</p>
          </div>
          <div className="action-buttons">
            <button className="follow-button">+ Seguir</button>
            <button className="message-button">Mensagem</button>
          </div>
        </div>

        {/* Seção de busca */}
        <div className="search-section">
          <input type="text" placeholder="Buscar itens..." />
        </div>

              {/* Seção de Itens Disponíveis */}
        
        <div className="items-section">
  <h2>Itens Disponíveis</h2>
  <span className="view-all">Ver todos &gt;</span>
  <div className="items-list">
    <div className="item-card">
      <img src={TELEFONE} alt="Smartphone" />
      <h3>Smartphone</h3>
      <p>Reservar</p>
      <button className="reserve-button">Reservar</button>
    </div>
    <div className="item-card">
      <img src={NOTEBOOK} alt="Laptop" />
      <h3>Notebook</h3>
      <p>Reservar</p>
      <button className="reserve-button">Reservar</button>
    </div>
  </div>
</div>


        {/* Seção de Reputação */}
        <div className="reputation-section">
          <h2>Reputação</h2>
          <div className="reputation-details">
            <div className="rating-row">
              <span>Confiabilidade</span>
              <div className="rating-bar"></div>
              <span className="star-rating">5⭐</span>
            </div>
            <div className="rating-row">
              <span>Rapidez</span>
              <div className="rating-bar"></div>
              <span className="star-rating">4⭐</span>
            </div>
          </div>
          <div className="reputation-buttons">
            <button>Editar</button>
            <button>Editar</button>
            <button>Pedidos</button>
            <button>Excluir</button>
          </div>
        </div>

        {/* Impacto ambiental - Exemplo */}
        <p className="environmental-impact">
          Impacto ambiental: 5,8kg reaproveitados
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;