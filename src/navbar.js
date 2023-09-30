import React from "react";
import { NavLink } from "react-router-dom";



function Navbar({cats}){
    const catLinks = cats.map((cat) => (
        <li className="nav-item" key={cat.name}>
            <NavLink  to={`/${cat.name}`} className="nav-link"> {cat.name}
            </NavLink>
        </li>
    ))

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        
            <a href="#" className="navbar-brand"></a>
           
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      
            <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    


                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink  to='/' className="nav-link" > Home</NavLink>
                        </li>
                        {catLinks}
                    </ul>
                </div>

                
        </nav>
    )
}

export default Navbar;