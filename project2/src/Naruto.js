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
      appearance: 'Episode 80'
    },
    { 
      name: 'Gaara', 
      image: GaaraImage, 
      description: 'A former enemy turned ally.', 
      detailedDescription: 'Gaara is initially introduced as an enemy but later becomes one of Naruto\'s most important allies. He is the Jinchuriki of the One-Tail and is initially a cold, detached individual due to his troubled past. Over time, Gaara learns the value of friendship and becomes a strong leader.',
      appearance: 'Episode 78'
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
      <h2>Naruto - A Ninja's Journey to Becoming Hokage</h2>
      <p>
        Naruto Uzumaki, a young ninja with dreams of becoming the Hokage, faces countless challenges on his journey to gain recognition and respect from his village.
        Along the way, he forms strong bonds with his friends and confronts powerful enemies. This series explores themes of friendship, perseverance, and the cost of ambition.
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
        <img src={bannerimg} alt="Naruto Banner" className="banner-image" />
      </div>
    </div>
  );
}

export default NarutoPage;
