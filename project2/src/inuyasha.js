import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import bannerimg from './images/inuyashabanner.jpeg';
import InuyashaImage from './images/inuyashaface.jpeg';
import KagomeImage from './images/Kagome_Episode_167.webp';
import MirokuImage from './images/Miroku_gets_slapped.webp';
import SangoImage from './images/Sango.webp';
import ShippoImage from './images/Shippo.webp';
import KikyoImage from './images/Wounded_Kikyo.webp';

function Inuyasha() {
  return (
    <div className="character-detail">
      <h2>Inuyasha</h2>
      <img src={InuyashaImage} alt="Inuyasha" />
      <p>Inuyasha is a half-demon with a fierce, independent personality. He was initially feared and misunderstood by humans due to his demonic heritage. Over time, he becomes one of the central figures in the quest to find the Shikon Jewel and protect those he cares about. Inuyasha is loyal, brave, and often torn between his human and demon sides.</p>
      <p>Appears in: Episode 1.</p>
    </div>
  );
}

function Kagome() {
  return (
    <div className="character-detail">
      <h2>Kagome Higurashi</h2>
      <img src={KagomeImage} alt="Kagome Higurashi" />
      <p>Kagome Higurashi is a modern-day high school student who is transported to the Sengoku period of Japan. She is the reincarnation of Kikyo, the former priestess, and becomes the partner of Inuyasha. Kagome is kind-hearted, brave, and skilled with a bow and arrow, which she uses to help Inuyasha and his friends on their quest.</p>
      <p>Appears in: Episode 1.</p>
    </div>
  );
}

function Miroku() {
  return (
    <div className="character-detail">
      <h2>Miroku</h2>
      <img src={MirokuImage} alt="Miroku" />
      <p>Miroku is a monk with a curse on his hand, known as the Wind Tunnel. Despite his carefree, flirtatious attitude, Miroku is deeply affected by his family's tragic history and the curse that threatens his life. He joins Inuyasha and Kagome in their quest to find the Shikon Jewel, offering his spiritual abilities and combat skills.</p>
      <p>Appears in: Episode 1.</p>
    </div>
  );
}

function Sango() {
  return (
    <div className="character-detail">
      <h2>Sango</h2>
      <img src={SangoImage} alt="Sango" />
      <p>Sango is a skilled demon slayer who initially joins Inuyasha and Kagome's group after the destruction of her village. She is strong, disciplined, and has a tragic past, having lost her family and her younger brother to a demon. Despite her sorrow, Sango is a dedicated warrior, using her combat skills to help her new friends and avenge her family.</p>
      <p>Appears in: Episode 1.</p>
    </div>
  );
}

function Shippo() {
  return (
    <div className="character-detail">
      <h2>Shippo</h2>
      <img src={ShippoImage} alt="Shippo" />
      <p>Shippo is a young fox demon who initially joins Inuyasha's group after his village is destroyed. He is playful, brave, and has a deep respect for Inuyasha and Kagome. Though not as strong as the others, Shippo provides emotional support and uses his magic tricks to assist in battle.</p>
      <p>Appears in: Episode 3.</p>
    </div>
  );
}

function Kikyo() {
  return (
    <div className="character-detail">
      <h2>Kikyo</h2>
      <img src={KikyoImage} alt="Kikyo" />
      <p>Kikyo is a powerful priestess and the original guardian of the Shikon Jewel. She was initially Inuyasha's love interest, but she was betrayed and killed by Naraku's manipulations. Kikyo is resurrected in the series, driven by a desire for revenge and to protect the Shikon Jewel from falling into the wrong hands.</p>
      <p>Appears in: Episode 1.</p>
    </div>
  );
}

function InuyashaPage() {
  const characters = [
    { 
      name: 'Inuyasha', 
      image: InuyashaImage, 
      description: 'Half-demon, the main protagonist of the series.', 
      path: 'inuyasha', 
      component: Inuyasha 
    },
    { 
      name: 'Kagome Higurashi', 
      image: KagomeImage, 
      description: 'Reincarnation of Kikyo and partner of Inuyasha.', 
      path: 'kagome', 
      component: Kagome 
    },
    { 
      name: 'Miroku', 
      image: MirokuImage, 
      description: 'A monk with a Wind Tunnel curse.', 
      path: 'miroku', 
      component: Miroku 
    },
    { 
      name: 'Sango', 
      image: SangoImage, 
      description: 'A skilled demon slayer seeking vengeance.', 
      path: 'sango', 
      component: Sango 
    },
    { 
      name: 'Shippo', 
      image: ShippoImage, 
      description: 'A young fox demon with a brave heart.', 
      path: 'shippo', 
      component: Shippo 
    },
    { 
      name: 'Kikyo', 
      image: KikyoImage, 
      description: 'A powerful priestess and protector of the Shikon Jewel.', 
      path: 'kikyo', 
      component: Kikyo 
    }
  ];

  return (
    <div className="character-cards-container">
      <h3>Click to learn more about a character</h3>
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
            <img src={character.image} alt={character.name} className="character-image" />
            <h3>{character.name}</h3>
            <p>{character.description}</p>
          </div>
        ))}
      </div>

      <div className="banner">
        <h1>Main & Supporting Characters</h1>
        <img src={bannerimg} alt="Inuyasha Banner" className="banner-image" />
      </div>
    </div>
  );
}

export default InuyashaPage;
