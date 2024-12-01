import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Irene from './components/irene';
import Seulgi from './components/seulgi';
import Wendy from './components/wendy';
import Joy from './components/joy';
import Yeri from './components/yeri';
import Error from './components/error';

function App() {
    return (
        <div>
            <h1 className='title'>Homework 5 by Betsy Zhang</h1>
            <h2>About Red Velvet, a 3rd generation kpop group</h2>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/irene" element={<Irene />} />
                    <Route path="/seulgi" element={<Seulgi />} />
                    <Route path="/wendy" element={<Wendy />} />
                    <Route path="/joy" element={<Joy />} />
                    <Route path="/yeri" element={<Yeri />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
