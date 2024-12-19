import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Product from './Product';
import About from './about';
import Carousel from './Carousel';
import Cart from './cart';
import SignUpLoginForm from './login'
import { CartProvider } from './CartContext';
import './App.css';

import godofwar from './images/godofwar.jpg';
import lockdown from './images/lockdown.jpg';
import reddead from './images/reddead2.jpg';
import helldivers from './images/helldivers2.jpg';

const slides = [
  {
    image: helldivers,
    title: 'HELLDIVERS™ 2',
    description: 'The Galaxy’s Last Line of Offence. Enlist in the Helldivers and join the fight for freedom across a hostile galaxy in a fast, frantic, and ferocious third-person shooter.',
    price: '$39.99'
  },
  {
    image: godofwar,
    title: 'God of War Ragnarök',
    description: 'Kratos and Atreus embark on a mythic journey for answers before Ragnarök arrives – now on PC.',
    price: '$59.99'
  },
  {
    image: reddead,
    title: 'Red Dead Redemption 2',
    description: 'Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.',
    price: '$59.99'
  },
  {
    image: lockdown,
    title: 'LOCKDOWN Protocol',
    description: 'A first person social deduction game, combining real time action and communication, 3 to 8 players. While most players will do their best to complete objectives and ensure victory, a small portion of dissidents will try to stop them at all costs, without getting caught.',
    price: '$9.99'
  },
];

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <h1>Gamer's Avenue</h1>
                <h1>Award Winners (Featured)</h1>
                <Carousel slides={slides} />
              </div>
            }
          />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<SignUpLoginForm />} />

          <Route
            path="*"
            element={
              <div className="App">
                <h1>404: Page Not Found</h1>
              </div>
            }
          />
        </Routes>
        <footer className="footer">
          <p>&copy; 2024 Gamer's Avenue. Educational purposes only.</p>
        </footer>
      </Router>
    </CartProvider>
  );
};

export default App;
