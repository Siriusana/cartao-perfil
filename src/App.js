import React, { useState } from "react";
import "./App.css";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const [profile, setProfile] = useState({
    name: "Seu Nome",
    title: "Seu Cargo ou Título",
    bio: "Uma breve biografia sobre você. Fale sobre suas paixões, habilidades e o que te motiva no dia a dia.",
    profileImage: "https://i.pravatar.cc/150?img=12", 
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleStart = () => {
    setIsFadingOut(true); 
    setTimeout(() => {
      setIsStarted(true); 
    }, 500); 
  };

  if (!isStarted) {
    return (
      <div className={`welcome-container ${isFadingOut ? 'fade-out' : ''}`}>
        <h1 className="welcome-title">Criador de Cartão de Perfil</h1>
        <p className="welcome-subtitle">
          Crie um cartão de perfil profissional e elegante em segundos.
        </p>
        <button className="start-button" onClick={handleStart}>
          Iniciar
        </button>
      </div>
    );
  }


  return (
    <div className="app-container fade-in">
      {/* Seção do Formulário */}
      <div className="form-section">
        <h1>Personalize seu Cartão</h1>
        <form>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            placeholder="Ex: Maria da Silva"
          />

          <label htmlFor="title">Cargo ou Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={profile.title}
            onChange={handleInputChange}
            placeholder="Ex: Desenvolvedora Front-end"
          />

          <label htmlFor="bio">Biografia</label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleInputChange}
            rows="4"
            placeholder="Fale um pouco sobre você..."
          />

          <label htmlFor="profileImage">URL da Imagem de Perfil</label>
          <input
            type="text"
            id="profileImage"
            name="profileImage"
            value={profile.profileImage}
            onChange={handleInputChange}
            placeholder="https://exemplo.com/imagem.png"
          />
        </form>
      </div>

      {/* Seção do Cartão de Perfil */}
      <div className="card-section">
        <div className="profile-card">
          <div className="card-banner"></div>
          <img
            src={profile.profileImage}
            alt="Foto de Perfil"
            className="card-profile-pic"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://i.pravatar.cc/150"; 
            }}
          />
          <div className="card-content">
            <h2 className="card-name">{profile.name}</h2>
            <h3 className="card-title">{profile.title}</h3>
            <p className="card-bio">{profile.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;