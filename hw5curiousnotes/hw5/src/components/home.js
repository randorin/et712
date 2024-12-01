import React from 'react'
import redvelvet from '../images/redvelvet.jpg'

const Home = function() {
    return (
        <>
            <header className='header'>
                <h1 className='headertitle'>Red Velvet</h1>
                <img src={redvelvet} alt="Irene" style={{ width: '300px', borderRadius: '10px' }} />
                <p>5-member girl group debuted in 2014</p>
            </header>
        </>
    )
}

export default Home;