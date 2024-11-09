import React from 'react';
import ReactDOM from 'react-dom/client';
import lambo from './images/lambo.jpg';

// content
const App = function() {
  return (
    <>
      <h1 style={{color: 'magenta', textAlign: 'center'}}>Welcome to React JS</h1>
      <h2 style={{fontFamily: 'algerian'}}>Betsy Zhang</h2>
      <figure style={{border: 'inset navy 10px'}} >
        <img src={lambo} style={{width: '100%', display: 'block'}}/>
      </figure>
      <figcaption style={{textAlign: 'center', fontSize: '20px'}} >
        The Lamborghini Sián
      </figcaption>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

