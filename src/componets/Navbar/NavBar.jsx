import React from "react";
import style from '../Navbar/NavBar.module.css'
import logo from "../../imagenes/logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={style.nav}>
      <button className={style.inicio}>Inicio</button>
      <Link to="/registro">
        <button className={style.registro}>Registro</button>
      </Link>
        <Link to="/">
          <img src={logo} alt="logo" className={style.logo} />
        </Link>
      <a href="" className={style.ayuda}>
        Ayuda
      </a>
      <div className={style.container}>
     
        <Link to="/Voil">
          <a className={style.voil}>Voli</a>
        </Link>
        <Link to="/hotel">
          <a className={style.hotel}>Hotel</a>
        </Link>
        <Link to="/taxi">
          <a className={style.taxi}>Taxi da / per l' aeroporto</a>
        </Link>
        
      
      <div className={style.menu3}>
        <Link to='/'>
          <a className={style.visti}> Visti d'ingreso</a>
        </Link>
        <ul className={style.dropdown}>
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
              Visto Turistico per l’invito dei cittadini extracomunitari in
              Italia
            </Link>
          </li>
        </ul>
        <Link to="/traduzione">
          <a className={style.traduzione}>Traduzione e Legalizzazione</a>
        </Link>
        </div>
        
      </div>
      
      
    </div>
  );
}
