import React from "react";
import {NavLink} from 'react-router-dom';
import { useParams } from "react-router-dom";
import './CatDetail.css';

const CatDetails = ({cats}) => {
    const {name} = useParams();
    const currentCat = cats.find((cat) => cat.name.toLowerCase() === name.toLowerCase());
    const today = new Date();
    let ageYear = today.getFullYear() - currentCat.birthYear;
    let ageMonth = today.getMonth() - currentCat.birthMonth+1;
    
    return(
        <div className="container">
            <div className="CatDetails row justify-content-center mt-5">
                <div className="col-11 col-lg-5">
                    <div className="CatDetails-card card">
                    <img className="card-img-tip" src={currentCat.src} alt={currentCat.name}></img>

                    <div className="card-body">
                        <h2 className="card-title">{currentCat.name} </h2>
                        <h4 className="card-subtitle text-muted"> <div className="age_container">{ ageYear>1 ? <div> {ageYear} Years </div> : <div>{ageYear} Year </div>} & { ageMonth>1 ? <div> {ageMonth} Months Young</div> : <div>{ageMonth} Month Young</div>}</div></h4>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{currentCat.facts}</li>
                        <li className="list-group-item">The next Vaccination: {currentCat.vMonth}, {currentCat.vYear + 3}  </li>
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