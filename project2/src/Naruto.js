import React, { useState } from 'react';
import ModalWindow from './modalwindow.js';
import bannerimg from './images/narutobanner.jpg';
import NarutoImage from './images/narutoface.jpg';
import SasukeImage from './images/sasukeface.jpg';
import SakuraImage from './images/sakuraface.jpg';
import KakashiImage from './images/kakashiface.jpg';
import ItachiImage from './images/itachiface.jpg';
import GaaraImage from './images/gaaraface.webp';

function NarutoPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characters = [
    { 
      name: 'Naruto Uzumaki', 
      image: NarutoImage, 
      description: 'The main protagonist of the series.', 
      detailedDescription: 'Naruto Uzumaki is a young ninja with a dream of becoming the Hokage, the leader of his village. He is known for his cheerful personality, his determination, and his ability to inspire others. Despite the hardships he faces, Naruto never gives up and is always ready to help his friends.',
      appearance: 'Episode 1'
    },
    { 
      name: 'Sasuke Uchiha', 
      image: SasukeImage, 
      description: 'Naruto\'s friend and rival.', 
      detailedDescription: 'Sasuke Uchiha is a member of the Uchiha clan and Naruto\'s friend and rival. He is driven by a desire to avenge his family\'s death by defeating his older brother, Itachi. Sasuke is a skilled ninja, known for his intelligence and his prowess in battle.',
      appearance: 'Episode 1'
    },
    { 
      name: 'Sakura Haruno', 
      image: SakuraImage, 
      description: 'A member of Team 7 and a skilled medical ninja.', 
      detailedDescription: 'Sakura Haruno is a member of Team 7, along with Naruto and Sasuke. She is a skilled medical ninja and has a strong resolve to protect her friends. Sakura is known for her intelligence, her strength, and her dedication to becoming a powerful ninja.',
      appearance: 'Episode 1'
    },
    { 
      name: 'Kakashi Hatake', 
      image: KakashiImage, 
      description: 'The leader of Team 7 and a legendary ninja.', 
      detailedDescription: 'Kakashi Hatake is the leader of Team 7 and a legendary ninja known for his Sharingan and his calm demeanor. He is a skilled and experienced ninja who mentors Naruto, Sasuke, and Sakura. Kakashi is known for his wisdom, his strategic thinking, and his loyalty to his village.',
      appearance: 'Episode 1'
    },
    { 
      name: 'Itachi Uchiha', 
      image: ItachiImage, 
      description: 'A former member of the Uchiha clan and Sasuke\'s older brother.', 
      detailedDescription: 'Itachi Uchiha is Sasuke\'s older brother and a former member of the Uchiha clan. He is known for his intelligence, his skill in battle, and his complex motivations. Despite his actions, Itachi is a deeply conflicted character who cares about his brother and his village.',
      appearance: 'Episode 29'
    },
    { 
      name: 'Gaara', 
      image: GaaraImage, 
      description: 'The Fifth Kazekage and a former enemy of Naruto.', 
      detailedDescription: 'Gaara is the Fifth Kazekage of the Hidden Sand Village and a former enemy of Naruto. He is known for his powerful sand-based abilities and his stoic demeanor. Over time, Gaara becomes an ally and friend to Naruto, sharing a similar background of loneliness and a desire for acceptance.',
      appearance: 'Episode 20'
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
        <img src={bannerimg} alt="Naruto Banner" className="banner-image" />
      </div>
    </div>
  );
}

export default NarutoPage;
