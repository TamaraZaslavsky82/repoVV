import logo from "../../imagenes/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

import { useState } from "react";

function NavBar() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <nav className="nav">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="links-container">
        <Link to="/Voil">
          <div>Voli</div>
        </Link>
        <Link to="/hotel">
          <div>Hotel</div>
        </Link>
        <Link to="/taxi">
          <div>Taxi da / per l'aeroporto</div>
        </Link>
        <Link
          to="/"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div>Visti d'ingresso</div>
        </Link>
        <ul
          className={`dropdown ${isHovering ? "active" : ""}`}
          data-dropdown-menu="visti"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
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
          <div>Traduzione e Legalizzazione</div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
