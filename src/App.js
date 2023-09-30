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
      age: 3,
      src: eeveeImg,
      facts: [ 
        'Eevee talks alot!',
        'Eevee does not gain fat',
        'Eevee is very nauty.'
      ]
    },

    { 
      name: 'Pichu', 
      age: 3,
      src: pichuImg,
      facts: [
        'Eevee sleeps a lot!',
        'Eevee likes human',
        'Eevee is quiet and playful.'
      ]
    },

    { 
      name: 'Raichu', 
      age: 2,
      src: raichuImg,
      facts: [
        'Raichu is chunky!',
        'She is very friendly to everyone stranger.',
        'Eevee is very playful, and afraid of lonely.'
      ]
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
