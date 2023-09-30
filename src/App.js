// import logo from './logo.svg';
import './App.css';
import React  from 'react';

import eeveeImg from './img/eevee.jpg';
import pichuImg from './img/pichu.jpg';
import raichuImg from './img/raichu.jpg';
import {Routes, Route} from 'react-router-dom'; 
import CatList from './CatList';
import CatDetails from './CatDetail';
import Navbar from './navbar';

const defaultProps = {
  cats: [
    { 
      name: 'Eevee', 
      birthYear: 2019,
      birthMonth: 3,
      vYear: 2023,
      vMonth: 'Aug',
      src: eeveeImg,
      facts: 'Eevee, our pampered sweetheart, adores treats without gaining weight, is talkative, and remarkably understands conversations well.'
    },

    { 
      name: 'Pichu', 
      birthYear: 2019,
      birthMonth: 3,
      vYear: 2023,
      vMonth: 'Aug',
      src: pichuImg,
      facts: 'Pichu, a drama queen, gets easily annoyed by trivial matters, adores humans, but not so much cats.'
    },

    { 
      name: 'Raichu', 
      birthYear: 2021,
      birthMonth: 4,
      vYear: 2023,
      vMonth: 'Aug',
      src: raichuImg,
      facts: 'Raichu excels as a PR, warmly greeting all, even strangers, with an appetite for everything, disliking solitude.'
    }
  ]
}



function App() {
  
  return (
    
    
    <div>
        <Navbar cats={defaultProps.cats} />
        <Routes>
            <Route  path="/" element={ <CatList cats={defaultProps.cats} /> } />
            
            <Route  path="/:name" element={<CatDetails cats={defaultProps.cats} />} />
            
        </Routes>
    </div>
    
  );
}

export default App;
// <CatList obj={defaultProps} />

// <Route  path="/cats" element={ <CatList cats={defaultProps.cats} /> } />
