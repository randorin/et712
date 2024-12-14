import React, { useState } from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Card from './card';
import ModalWindow from './modalwindow';
import angelbeatsimg from './images/angelbeats.jpg';
import inuyashaimg from './images/inuyasha.jpg';
import narutoimg from './images/naruto.jpg';
import AngelBeats from './angelbeats';
import Inuyasha from './Inuyasha';
import Naruto from './Naruto';

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`link ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  );
}

function App() {
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => setModalData(data);
  const closeModal = () => setModalData(null);

  const cards = [
    {
      title: "Angel Beats!",
      imageSrc: angelbeatsimg,
      description: "The story takes place in the afterlife and focuses on Otonashi, a boy who lost his memories of his life after dying. He is enrolled into the afterlife school and meets a girl named Yuri who invites him to join the Afterlife Battlefront, an organization she leads which fights against the student council president Kanade Tachibana, a girl also known as Angel with supernatural powers."
    },
    {
      title: "Inuyasha",
      imageSrc: inuyashaimg,
      description: "The series begins with Kagome Higurashi, a fifteen-year-old middle school girl from modern-day Tokyo who is transported to the Sengoku period after falling into a well in her family shrine, where she meets the half-dog demon, half-human Inuyasha. After the sacred Shikon Jewel re-emerges from deep inside Kagome's body, she inadvertently shatters it into dozens of fragments that scatter across Japan. Inuyasha and Kagome set out to recover Jewel's fragments, and through their quest, they are joined by the lecherous monk Miroku, the demon slayer Sango, and the fox demon Shippō. Together, they journey to restore the Shikon Jewel before it falls into the hands of the evil half-demon Naraku."
    },
    {
      title: "Naruto",
      imageSrc: narutoimg,
      description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts: the first is set in Naruto's pre-teen years (volumes 1–27), and the second in his teens (volumes 28–72)."
    },
  ];

  return (
    <Router>
      <div className="header-container">
        <h1>Anime Main Characters</h1>
      </div>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/angelbeats">Angel Beats</NavLink>
        <NavLink to="/inuyasha">Inuyasha</NavLink>
        <NavLink to="/naruto">Naruto</NavLink>
      </nav>

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="card-container">
                {cards.map((card, index) => (
                  <div key={index} className="card-link">
                    <Card
                      title={card.title}
                      description="click to open summary"
                      imageSrc={card.imageSrc}
                      onClick={() => openModal(card)}
                    />
                  </div>
                ))}
              </div>
            }
          />
          <Route path="/angelbeats/*" element={<AngelBeats />} />
          <Route path="/inuyasha/*" element={<Inuyasha />} />
          <Route path="/naruto/*" element={<Naruto />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>

      {modalData && (
        <ModalWindow
          isOpen={!!modalData}
          onClose={closeModal}
          title={modalData.title}
          imageSrc={modalData.imageSrc}
          description={modalData.description}
        />
      )}
    </Router>
  );
}

export default App;
