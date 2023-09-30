import React from "react";
import eeveeImg from './img/eevee.jpg';
import pichuImg from './img/pichu.jpg';
import raichuImg from './img/raichu.jpg';
import './CatList.css';
import { NavLink } from "react-router-dom";


function CatList(props){
    
    return(
        <div className="CatList"> 
            <h1 className="display-1 text-center"> Carolyn's Cats & Friends' Cats</h1>
            
            <div className="container">
                <div className="row">
                    {props.cats.map(d => (
                        <div className="Cat col-lg-4 text-center" key={d.name}>
                        <img src={d.src} alt={d.name} />
                        <h3>
                        <NavLink className="underline" to={`/${d.name}`}>{d.name}</NavLink>
                        </h3>
                        </div>))}
                </div>
            </div>      
        </div>
        
    );
}

export default CatList;