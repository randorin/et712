import React, { useState } from 'react';
import ModalWindow from './modalwindow.js';
import bannerimg from './images/inuyashabanner.jpeg';
import InuyashaImage from './images/inuyashaface.jpeg';
import KagomeImage from './images/Kagome_Episode_167.webp';
import MirokuImage from './images/Miroku_gets_slapped.webp';
import SangoImage from './images/Sango.webp';
import ShippoImage from './images/Shippo.webp';
import KikyoImage from './images/Wounded_Kikyo.webp';

function InuyashaPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characters = [
    { 
      name: 'Inuyasha', 
      image: InuyashaImage, 
      description: 'Half-demon, the main protagonist of the series.', 
      detailedDescription: 'Inuyasha is a half-demon with a fierce, independent personality. He was initially feared and misunderstood by humans due to his demonic heritage. Over time, he becomes one of the central figures in the quest to find the Shikon Jewel and protect those he cares about. Inuyasha is loyal, brave, and often torn between his human and demon sides.',
      appearance: 'Episode 1'
    },
    { 
      name: 'Kagome Higurashi', 
      image: KagomeImage, 
      description: 'Reincarnation of Kikyo and partner of Inuyasha.', 
      detailedDescription: 'Kagome Higurashi is a modern-day high school student who is transported to the Sengoku period of Japan. She is the reincarnation of Kikyo, the former priestess, and becomes the partner of Inuyasha. Kagome is kind-hearted, brave, and skilled with a bow and arrow, which she uses to help Inuyasha and his friends on their quest.',
      appearance: 'Episode 1'
    },
    { 
      name: 'Miroku', 
      image: MirokuImage, 
      description: 'A monk with a Wind Tunnel curse.', 
      detailedDescription: 'Miroku is a monk with a curse on his hand, known as the Wind Tunnel. Despite his carefree, flirtatious attitude, Miroku is deeply affected by his family\'s tragic history and the curse that threatens his life. He joins Inuyasha and Kagome in their quest to find the Shikon Jewel, offering his spiritual abilities and combat skills.',
      appearance: 'Episode 1'
    },
    { 
      name: 'Sango', 
      image: SangoImage, 
      description: 'A skilled demon slayer seeking vengeance.', 
      detailedDescription: 'Sango is a skilled demon slayer who initially joins Inuyasha and Kagome\'s group after the destruction of her village. She is strong, disciplined, and has a tragic past, having lost her family and her younger brother to a demon. Despite her sorrow, Sango is a dedicated warrior, using her combat skills to help her new friends and avenge her family.',
      appearance: 'Episode 1'
    },
    { 
      name: 'Shippo', 
      image: ShippoImage, 
      description: 'A young fox demon with a brave heart.', 
      detailedDescription: 'Shippo is a young fox demon who initially joins Inuyasha\'s group after his village is destroyed. He is playful, brave, and has a deep respect for Inuyasha and Kagome. Though not as strong as the others, Shippo provides emotional support and uses his magic tricks to assist in battle.',
      appearance: 'Episode 3'
    },
    { 
      name: 'Kikyo', 
      image: KikyoImage, 
      description: 'A powerful priestess and protector of the Shikon Jewel.', 
      detailedDescription: 'Kikyo is a powerful priestess and the original guardian of the Shikon Jewel. She was initially Inuyasha\'s love interest, but she was betrayed and killed by Naraku\'s manipulations. Kikyo is resurrected in the series, driven by a desire for revenge and to protect the Shikon Jewel from falling into the wrong hands.',
      appearance: 'Episode 1'
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
      <h2>Inuyasha - A Tale of Love, Demons, and Time Travel</h2>
      <p>
        Inuyasha is a half-demon from Japan's Sengoku period who embarks on a journey to find the Shikon Jewel, which grants immense power. 
        Along the way, he is joined by Kagome, a modern-day high school student reincarnated as a priestess, as well as other companions with their own personal quests.
        This series blends romance, action, and supernatural adventures, while exploring the bonds formed between its characters.
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
        <img src={bannerimg} alt="Inuyasha Banner" className="banner-image" />
      </div>
    </div>
  );
}

export default InuyashaPage;
