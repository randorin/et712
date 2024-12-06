import React from 'react';
import ReactDOM from 'react-dom/client';
import lambo from './images/lambo.jpg';
import './index.css';
// content
const App = function() {
  const anymsg = "I am text constant variable"
  return (
    <>
      <h1 style={{color: 'magenta', textAlign: 'center'}}>Welcome to React JS</h1>
      <h2 style={{fontFamily: 'algerian'}} className='subtitle'>Betsy Zhang</h2>
      <figure style={{border: 'inset navy 10px', width: '60%', margin: 'auto'}} >
        <img src={lambo} style={{width: '100%', display: 'block'}}/>
      </figure>
      <figcaption style={{textAlign: 'center', fontSize: '20px'}} >
        The Lamborghini Sián
      </figcaption>
      <h2 style={{padding: '2em'}}>{anymsg}</h2>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

