import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

function NarutoUzumaki() {
  return (
    <div className="character-detail">
      <h2>Naruto Uzumaki</h2>
      <img src="/images/naruto.jpg" alt="Naruto Uzumaki" />
      <p>A young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
    </div>
  );
}

function SasukeUchiha() {
  return (
    <div className="character-detail">
      <h2>Sasuke Uchiha</h2>
      <img src="/images/sasuke.jpg" alt="Sasuke Uchiha" />
      <p>A member of the Uchiha clan and Naruto's rival, known for his powerful sharingan.</p>
    </div>
  );
}

function SakuraHaruno() {
  return (
    <div className="character-detail">
      <h2>Sakura Haruno</h2>
      <img src="/images/sakura.jpg" alt="Sakura Haruno" />
      <p>A member of Team 7, known for her intelligence and strength.</p>
    </div>
  );
}

function KakashiHatake() {
  return (
    <div className="character-detail">
      <h2>Kakashi Hatake</h2>
      <img src="/images/kakashi.jpg" alt="Kakashi Hatake" />
      <p>The leader of Team 7, known as the Copy Ninja for his ability to mimic any jutsu he sees.</p>
    </div>
  );
}

function HinataHyuga() {
  return (
    <div className="character-detail">
      <h2>Hinata Hyuga</h2>
      <img src="/images/hinata.jpg" alt="Hinata Hyuga" />
      <p>A member of the Hyuga clan who has a strong admiration for Naruto.</p>
    </div>
  );
}

function Gaara() {
  return (
    <div className="character-detail">
      <h2>Gaara</h2>
      <img src="/images/gaara.jpg" alt="Gaara" />
      <p>The Kazekage of the Sand Village, known for his control over sand.</p>
    </div>
  );
}

function Naruto() {
  const characters = [
    { name: "Naruto Uzumaki", path: "naruto", component: NarutoUzumaki },
    { name: "Sasuke Uchiha", path: "sasuke", component: SasukeUchiha },
    { name: "Sakura Haruno", path: "sakura", component: SakuraHaruno },
    { name: "Kakashi Hatake", path: "kakashi", component: KakashiHatake },
    { name: "Hinata Hyuga", path: "hinata", component: HinataHyuga },
    { name: "Gaara", path: "gaara", component: Gaara }
  ];

  return (
    <div className="character-cards-container">
      <nav className="character-nav">
        {characters.map((character, index) => (
          <Link key={index} to={character.path} className="character-link">
            {character.name}
          </Link>
        ))}
      </nav>

      <Routes>
        {characters.map((character, index) => (
          <Route key={index} path={character.path} element={<character.component />} />
        ))}
      </Routes>

      <div className="characters-overview">
        {characters.map((character, index) => (
          <div key={index} className="character-card">
            <img src={`/images/${character.path}.jpg`} alt={character.name} className="character-image" />
            <h3>{character.name}</h3>
            <p>{character.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Naruto;
