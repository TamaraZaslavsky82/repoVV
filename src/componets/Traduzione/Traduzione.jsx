import React from "react";
import traducciones from "../../../src/imagenes/traducciones.png";
import style from '../../componets/Traduzione/Traduzione.module.css'
import Form2 from '../../../src/componets/Form/Form2'

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
      <ul>
        <li>richiesta, traduzione e legalizzazione di documenti</li>
        <li>spedizione documenti dall’Italia verso paesi extra UE</li>
      </ul>
      <Form2/>
    </div>
  );
}
export default Traduzione;
