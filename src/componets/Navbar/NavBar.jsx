

import logo from "../../imagenes/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

import { useState } from 'react';



function Nav() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="links-container">
        <Link to="/Voil">
          <a>Voli</a>
        </Link>
        <Link to="/hotel">
          <a>Hotel</a>
        </Link>
        <Link to="/taxi">
          <a>Taxi da / per l'aeroporto</a>
        </Link>
        <Link
          to="/"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <a>Visti d'ingresso</a>
        </Link>
        <ul className={`dropdown ${isHovering ? 'active' : ''}`} data-dropdown-menu="visti">
          <li>
            <Link to="/Ottomento">
              OTTENIMENTO VISTO PER CITTADINI EXTRACOMUNITARI
            </Link>
          </li>
          <li>
            <Link to="/assicurazione">
              Assicurazione di viaggio per turismo/visto d’ingresso
            </Link>
          </li>
          <li>
            <Link to="/dichiarazione">
              DICHIARAZIONE DI OSPITALITÀ PER EXTRACOMUNITARI
            </Link>
          </li>
          <li>
            <Link to="/vistoturistico">
              Visto Turistico per l’invito dei cittadini extracomunitari in Italia
            </Link>
          </li>
        </ul>
        <Link to="/traduzione">
          <a>Traduzione e Legalizzazione</a>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;

