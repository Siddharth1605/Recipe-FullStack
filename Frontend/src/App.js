import React from 'react';
import Home from './Home';
import biriyani from './Assets/biriyani.jpg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dish from './Dish';

export default function App() {
 
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dish" element={<Dish />} />
    </Routes>
    </div>

  );
}