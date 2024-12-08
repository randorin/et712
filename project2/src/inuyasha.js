import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import bannerimg from './images/inuyashabanner.jpeg';

function Kagome() {
  return (
    <div className="character-detail">
      <h2>Kagome Higurashi</h2>
      <img src="/images/kagome.jpg" alt="Kagome Higurashi" />
      <p>A fifteen-year-old middle school girl from modern-day Tokyo who is transported to the Sengoku period.</p>
    </div>
  );
}

function InuyashaDetail() {
  return (
    <div className="character-detail">
      <h2>Inuyasha</h2>
      <img src="/images/inuyasha.jpg" alt="Inuyasha" />
      <p>A half-dog demon, half-human who teams up with Kagome to recover the sacred Shikon Jewel fragments.</p>
    </div>
  );
}

function Miroku() {
  return (
    <div className="character-detail">
      <h2>Miroku</h2>
      <img src="/images/miroku.jpg" alt="Miroku" />
      <p>A lecherous monk who joins Inuyasha and Kagome on their quest.</p>
    </div>
  );
}

function Sango() {
  return (
    <div className="character-detail">
      <h2>Sango</h2>
      <img src="/images/sango.jpg" alt="Sango" />
      <p>A demon slayer who joins the quest to recover the Shikon Jewel fragments.</p>
    </div>
  );
}

function Shippo() {
  return (
    <div className="character-detail">
      <h2>Shippō</h2>
      <img src="/images/shippo.jpg" alt="Shippō" />
      <p>A fox demon who becomes a loyal companion to Inuyasha and Kagome.</p>
    </div>
  );
}

function Naraku() {
  return (
    <div className="character-detail">
      <h2>Naraku</h2>
      <img src="/images/naraku.jpg" alt="Naraku" />
      <p>An evil half-demon who is the main antagonist.</p>
    </div>
  );
}

function Inuyasha() {
  const characters = [
    { name: "Kagome Higurashi", path: "kagome", component: Kagome },
    { name: "Inuyasha", path: "inuyasha", component: InuyashaDetail },
    { name: "Miroku", path: "miroku", component: Miroku },
    { name: "Sango", path: "sango", component: Sango },
    { name: "Shippō", path: "shippo", component: Shippo },
    { name: "Naraku", path: "naraku", component: Naraku }
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

      <div className="banner">
        <h1>Inuyasha</h1>
        <img src={bannerimg} alt="Inuyasha Banner" className="banner-image" />
      </div>
    </div>
  );
}

export default Inuyasha;
