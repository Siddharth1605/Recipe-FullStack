import React from 'react';
import Home from './Home';
import biriyani from './Assets/biriyani.jpg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dish from './Dish';
import Cooking from './Cooking';
export default function App() {
 
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dish" element={<Dish />} />
    <Route path="/cooking" element={<Cooking />} />
    </Routes>
    </div>

  );
}