import React from "react";
import {NavLink} from 'react-router-dom';
import { useParams } from "react-router-dom";
import './CatDetail.css';

const CatDetails = ({cats}) => {
    const {name} = useParams();
    const currentCat = cats.find((cat) => cat.name.toLowerCase() === name.toLowerCase());

    return(
        <div className="container">
            <div className="CatDetails row justify-content-center mt-5">
                <div className="col-11 col-lg-5">
                    <div className="CatDetails-card card">
                    <img className="card-img-tip" src={currentCat.src} alt={currentCat.name}></img>

                    <div className="card-body">
                        <h2 className="card-title">{currentCat.name}</h2>
                        <h4 className="card-subtitle text-muted"> {currentCat.age} years old</h4>
                    </div>

                    <ul className="list-group list-group-flush">
                        {currentCat.facts.map((fact, i) => (<li className="list-group-item" key={i}>{fact}</li>))}
                    </ul>

                    <div className="card-body">
                        <NavLink to='/' className="btn btn-info" > Go Back </NavLink>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatDetails;