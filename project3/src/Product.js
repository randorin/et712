import React, { useState } from 'react';
import './App.css';
import ModalWindow from './ModalWindow';
import { useCart } from './CartContext';

import geometry from './images/geometry.avif';
import terraria from './images/terraria.webp';
import starsandtime from './images/starsandtime.jpg';
import hades from './images/hades.jpg';
import palworld from './images/palworld.jpg';
import riskofrain from './images/riskofrain.jpg';
import supermarket from './images/supermarket.jpg';
import lethal from './images/lethal.jpg';
import stardew from './images/stardew.png';
import cyberpunk from './images/Cyberpunk.jpg';
import witcher from './images/witcher3.jpeg';
import reddead2 from './images/reddead2.jpg';

const games = [
  {
    id: 1,
    title: 'Geometry Dash',
    description: 'A rhythm-based platformer with creative levels.',
    price: '$9.99',
    image: geometry,
    genre: 'Platformer'
  },
  {
    id: 2,
    title: 'Terraria',
    description: 'Explore, build, and survive in a procedurally generated world.',
    price: '$9.99',
    image: terraria,
    genre: 'Adventure'
  },
  {
    id: 3,
    title: 'In Stars And Time',
    description: 'A story-driven RPG with time manipulation mechanics.',
    price: '$19.99',
    image: starsandtime,
    genre: 'RPG'
  },
  {
    id: 4,
    title: 'Hades',
    description: 'A rogue-like dungeon crawler with action-packed combat.',
    price: '$24.99',
    image: hades,
    genre: 'Action'
  },
  {
    id: 5,
    title: 'Palworld',
    description: 'A multiplayer game where you catch and battle creatures in a vast world.',
    price: '$29.99',
    image: palworld,
    genre: 'Adventure'
  },
  {
    id: 6,
    title: 'Risk of Rain 2',
    description: 'A third-person shooter rogue-like with cooperative gameplay.',
    price: '$24.99',
    image: riskofrain,
    genre: 'Shooter'
  },
  {
    id: 7,
    title: 'Supermarket Together',
    description: 'A cooperative game where players run a supermarket.',
    price: '$14.99',
    image: supermarket,
    genre: 'Simulation'
  },
  {
    id: 8,
    title: 'Lethal Company',
    description: 'A multiplayer survival horror game with mystery elements.',
    price: '$9.99',
    image: lethal,
    genre: 'Horror'
  },
  {
    id: 9,
    title: 'Stardew Valley',
    description: 'A farming simulator with elements of RPG, relationships, and exploration.',
    price: '$14.99',
    image: stardew,
    genre: 'Simulation'
  },
  {
    id: 10,
    title: 'Cyberpunk 2077',
    description: 'An open-world RPG set in a dystopian future, where you navigate the streets of Night City.',
    price: '$59.99',
    image: cyberpunk,
    genre: 'RPG'
  },
  {
    id: 11,
    title: 'The Witcher 3: Wild Hunt',
    description: 'A story-driven RPG where you play as Geralt of Rivia, hunting monsters in a medieval fantasy world.',
    price: '$39.99',
    image: witcher,
    genre: 'RPG'
  },
  {
    id: 12,
    title: 'Red Dead Redemption 2',
    description: 'A western-themed open-world RPG where you play as Arthur Morgan, exploring the American frontier.',
    price: '$59.99',
    image: reddead2,
    genre: 'Action/Adventure'
  }
];

const Product = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const { cart, addToCart } = useCart();
  const [filter, setFilter] = useState('All');
  const [sortByName, setSortByName] = useState('');
  const [sortByPrice, setSortByPrice] = useState('');
  const [quantity, setQuantity] = useState(1);

  const openModal = (game) => {
    setSelectedGame(game);
    setQuantity(1); // Reset quantity to 1 when a new game is selected
  };

  const closeModal = () => setSelectedGame(null);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortByNameChange = (event) => {
    setSortByName(event.target.value);
  };

  const handleSortByPriceChange = (event) => {
    setSortByPrice(event.target.value);
  };

  const handleAddToCart = (game) => {
    addToCart({ ...game, quantity });
    closeModal();
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const filteredGames = filter === 'All' ? games : games.filter(game => game.genre === filter);

  const sortedGames = filteredGames
    .sort((a, b) => {
      if (sortByName === 'A-Z') {
        return a.title.localeCompare(b.title);
      } else if (sortByName === 'Z-A') {
        return b.title.localeCompare(a.title);
      } else if (sortByPrice === 'asc') {
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      } else if (sortByPrice === 'desc') {
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      }
      return 0;
    });

  return (
    <div className="app">
      <h1>Gamer's Avenue</h1>
      <center><p>Click on a game to add to cart.</p></center>
      <div className="filter">
        <label htmlFor="genre">Filter by Genre: </label>
        <select id="genre" value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Platformer">Platformer</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Action">Action</option>
          <option value="Shooter">Shooter</option>
          <option value="Simulation">Simulation</option>
          <option value="Horror">Horror</option>
        </select>

        <label htmlFor="sortByName">Sort by Name: </label>
        <select id="sortByName" value={sortByName} onChange={handleSortByNameChange}>
          <option value="">Select</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>

        <label htmlFor="sortByPrice">Sort by Price: </label>
        <select id="sortByPrice" value={sortByPrice} onChange={handleSortByPriceChange}>
          <option value="">Select</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="game-grid">
        {sortedGames.map((game) => (
          <div key={game.id} className="game-card" onClick={() => openModal(game)}>
            <img src={game.image} alt={game.title} className="game-image" />
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <p className="game-price">Current Price: {game.price}</p>
          </div>
        ))}
      </div>

      {selectedGame && (
        <ModalWindow
          isOpen={true}
          onClose={closeModal}
          content={{
            title: selectedGame.title,
            description: selectedGame.description,
            image: selectedGame.image,
            price: selectedGame.price,
            id: selectedGame.id,
          }}
          onAddToCart={() => handleAddToCart(selectedGame)}
        >
          <div className="quantity-selection">
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
          </div>
        </ModalWindow>
      )}
    </div>
  );
};

export default Product;
