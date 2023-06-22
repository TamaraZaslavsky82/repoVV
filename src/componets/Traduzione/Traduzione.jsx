import React from "react";
import traducciones from "../../../src/imagenes/traducciones.png";
import style from '../../componets/Traduzione/Traduzione.module.css'
import Form from '../../../src/componets/Form/Form.jsx'

function Traduzione() {
  return (
    <div>
      <img src={traducciones} alt=""  className={style.foto}/>
      <h2 className={style.p}>
        Traduzioni e legalizzazioni documenti per cittadini extra comunitar
      </h2>
      <p>
        Offriamo un servizio professionale ed efficiente per il disbrigo delle
        pratiche per i cittadini Cubani:
      </p>
      <ul className={style.u}>
        <li>richiesta, traduzione e legalizzazione di documenti</li>
        <li>spedizione documenti dall’Italia verso paesi extra UE</li>
      </ul>
      <div style={{marginLeft:'60px'}}> <Form/></div>
     
    </div>
  );
}
export default Traduzione;
