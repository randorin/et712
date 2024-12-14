import React from 'react';
import bannerimg from './images/battlefront.jpg';
import YuriNakamura from './images/YuriNakamura.webp';
import KanadeTachibana from './images/KanadeTachibana.webp';
import OtonashiYuzuru from './images/OtonashiYuzuru.jpeg';
import HidekiHinata from './images/HidekiHinata.jpeg';
import NaoiAyato from './images/NaoiAyato.webp';
import YuiImage from './images/yui.webp';

function AngelBeats() {
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

  return (
    <div className="character-cards-container">
      <h3>Character Information</h3>
      <div className="characters-overview">
        {characters.map((character, index) => (
          <div key={index} className="character-card">
            <img src={character.image} alt={character.name} className="character-image" />
            <h3>{character.name}</h3>
            <p>{character.description}</p>
            <p>{character.detailedDescription}</p>
            <p><strong>Cause of Death:</strong> {character.causeOfDeath}</p>
            <p><strong>First Appearance:</strong> {character.appearance}</p>
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
