import React from 'react';
import '../Styles/pages/landing.css';
import logoimg from '../Images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import {Link} from 'react-router-dom';

function Landing(){
    return(
        <div id="page-landing">
     <div className="content-wrapper">
        <img src={logoimg} alt="Happy"/>
   

          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>

          <div className="location">
           <strong>Rio de Janeiro</strong>
           <span>Rio de Janeiro</span>
          </div>

          <Link to="/App" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
          </Link>

      </div>
    </div>
    );
}


export default Landing;