import './App.css';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openreadmore = () => {
    setIsOpen(!isOpen);
  };

  const [inputs, setInputs] = useState({});

  const submitform = (e) => {
    e.preventDefault();
    alert(`Welcome to React form. Your username is ${inputs.username} \n Your age is ${inputs.age}`);
  };

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="App">
      <h1>Betsy Zhang</h1>
      <div className="info">
        <p>
          <b>Cat (Felis catus)</b>, commonly referred to as the domestic pet or house cat
        </p>
        <button className="readmorebtn" onClick={openreadmore}>
          {isOpen ? 'Hide' : 'Read More'}
        </button>
      </div>
      <section>
        {isOpen && (
          <div className="readmore">
            <p>
              As of 2017, the domestic cat was the second most popular pet in the United States, with 95.6 million cats owned and around 42 million households owning at least one cat. In the United Kingdom, 26% of adults have a cat, with an estimated population of 10.9 million pet cats as of 2020. As of 2021, there were an estimated 220 million owned and 480 million stray cats in the world.
            </p>
          </div>
        )}
      </section>

      <form onSubmit={submitform}>
        <fieldset>
          <legend>
            <label htmlFor="username">Enter a name: </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Type your name..."
              value={inputs.username || ''}
              onChange={handlechange}
            />
            <label htmlFor="age">Enter an age: </label>
            <input
              type="number"
              name="age"
              id="age"
              value={inputs.age || ''}
              onChange={handlechange}
            />
          </legend>
          <div>
            <input type="submit" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
