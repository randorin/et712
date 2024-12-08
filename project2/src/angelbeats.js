import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import bannerimg from './images/battlefront.jpg';

function Yuri() {
  return (
    <div className="character-detail">
      <h2>Yuri Nakamura</h2>
      <img src="/images/yuri.jpg" alt="Yuri Nakamura" />
      <p>Leader of the Afterlife Battlefront.</p>
    </div>
  );
}

function Kanade() {
  return (
    <div className="character-detail">
      <h2>Kanade Tachibana</h2>
      <img src="/images/kanade.jpg" alt="Kanade Tachibana" />
      <p>Known as Angel, a mysterious girl with supernatural powers.</p>
    </div>
  );
}

function Otonashi() {
  return (
    <div className="character-detail">
      <h2>Otonashi Yuzuru</h2>
      <img src="/images/otonashi.jpg" alt="Otonashi Yuzuru" />
      <p>The protagonist who joins the Afterlife Battlefront.</p>
    </div>
  );
}

function Hideki() {
  return (
    <div className="character-detail">
      <h2>Hideki Hinata</h2>
      <img src="/images/hideki.jpg" alt="Hideki Hinata" />
      <p>A member of the Afterlife Battlefront, known for his humor.</p>
    </div>
  );
}

function Naoi() {
  return (
    <div className="character-detail">
      <h2>Naoi Ayato</h2>
      <img src="/images/naoi.jpg" alt="Naoi Ayato" />
      <p>A former antagonist turned ally.</p>
    </div>
  );
}

function Takamatsu() {
  return (
    <div className="character-detail">
      <h2>Takamatsu</h2>
      <img src="/images/takamatsu.jpg" alt="Takamatsu" />
      <p>A member of the Afterlife Battlefront.</p>
    </div>
  );
}

function AngelBeats() {
  const characters = [
    { name: "Yuri Nakamura", path: "yuri", component: Yuri },
    { name: "Kanade Tachibana", path: "kanade", component: Kanade },
    { name: "Otonashi Yuzuru", path: "otonashi", component: Otonashi },
    { name: "Hideki Hinata", path: "hideki", component: Hideki },
    { name: "Naoi Ayato", path: "naoi", component: Naoi },
    { name: "Takamatsu", path: "takamatsu", component: Takamatsu }
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
        <h1>Afterlife Battlefront</h1>
        <img src={bannerimg} alt="Angel Beats Banner" className="banner-image" />
      </div>
    </div>
  );
}

export default AngelBeats;
