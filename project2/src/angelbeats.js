import React, { useState } from 'react';
import ModalWindow from './modalwindow.js';
import bannerimg from './images/battlefront.jpg';
import YuriNakamura from './images/YuriNakamura.webp';
import KanadeTachibana from './images/KanadeTachibana.webp';
import OtonashiYuzuru from './images/OtonashiYuzuru.jpeg';
import HidekiHinata from './images/HidekiHinata.jpeg';
import NaoiAyato from './images/NaoiAyato.webp';
import YuiImage from './images/yui.webp';

function AngelBeats() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characters = [
    { 
      name: 'Yuri Nakamura', 
      image: YuriNakamura, 
      description: 'Leader of the Afterlife Battlefront.', 
      detailedDescription: 'Yuri Nakamura is the leader of the Afterlife Battlefront, a group of students who have died and are stuck in the afterlife...',
      causeOfDeath: 'Unknown', 
      appearance: 'Episode 1'
    },
    { 
      name: 'Kanade Tachibana', 
      image: KanadeTachibana, 
      description: 'Known as Angel, a mysterious girl with supernatural powers.',
      detailedDescription: 'Kanade Tachibana, known as "Angel", is the student council president with supernatural abilities...',
      causeOfDeath: 'Heart Disease', 
      appearance: 'Episode 1'
    },
    { 
      name: 'Otonashi Yuzuru', 
      image: OtonashiYuzuru, 
      description: 'The protagonist who joins the Afterlife Battlefront.',
      detailedDescription: 'Otonashi Yuzuru is the protagonist of Angel Beats, who wakes up in the afterlife with no memories...',
      causeOfDeath: 'Train Crash', 
      appearance: 'Episode 1'
    },
    { 
      name: 'Hideki Hinata', 
      image: HidekiHinata, 
      description: 'A member of the Afterlife Battlefront, known for his humor.',
      detailedDescription: 'Hideki Hinata is known for his humor and playful nature, but his past reveals tragic backstories...',
      causeOfDeath: 'Baseball Accident', 
      appearance: 'Episode 1'
    },
    { 
      name: 'Naoi Ayato', 
      image: NaoiAyato, 
      description: 'A former antagonist turned ally.',
      detailedDescription: 'Naoi Ayato is a former antagonist who joins the Afterlife Battlefront and learns the importance of friendship...',
      causeOfDeath: 'Starvation', 
      appearance: 'Episode 4'
    },
    { 
      name: 'Yui', 
      image: YuiImage, 
      description: 'A lively and energetic member of the Afterlife Battlefront.',
      detailedDescription: 'Yui is a lively member of the group, but her past reveals a tragic story...',
      causeOfDeath: 'Paralysis', 
      appearance: 'Episode 2'
    }
  ];

  const openModal = (character) => {
    setSelectedCharacter(character);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <div className="character-cards-container">
      <h2>Angel Beats! - Afterlife Battlefront</h2>
      <p>
        *Angel Beats!* is set in the afterlife, where a group of teenagers, having passed away under tragic circumstances, must confront their unresolved regrets before they can move on. The series follows Otonashi, who wakes up without any memory of his past life and gets caught in the conflict between the Afterlife Battlefront led by Yuri and Angel, a mysterious figure with supernatural powers. The characters each have their own unique, often painful, backstories that unfold throughout the show, exploring themes of life, death, and redemption.
      </p>
      <h3>Character Information</h3>
      <div className="characters-overview">
        {characters.map((character, index) => (
          <div key={index} className="character-card" onClick={() => openModal(character)}>
            <img src={character.image} alt={character.name} className="character-image" />
            <h3>{character.name}</h3>
            <p>{character.description}</p>
          </div>
        ))}
      </div>

      <ModalWindow 
        isOpen={modalOpen} 
        onClose={closeModal} 
        title={selectedCharacter?.name} 
        imageSrc={selectedCharacter?.image} 
        description={selectedCharacter?.detailedDescription} 
      />

      <div className="banner">
        <h1>Afterlife Battlefront</h1>
        <img src={bannerimg} alt="Angel Beats Banner" className="banner-image" />
      </div>
    </div>
  );
}

export default AngelBeats;
