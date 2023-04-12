import React from "react";
import dichi from '../../imagenes/dichi.png'
import style from "../Dichiarazione/Dichiarazione.module.css"; 

export default function Dichiarazione() {
  return (
    <div>
      <h2 className={style.h2}>DICHIARAZIONE DI OSPITALITÀ PER EXTRACOMUNITARI</h2>
      <br />
      <img src={dichi} alt="dichi" className={style.dichi}/>
      <h3 className={style.h3}>
        Dichiarazione di ospitalità-alloggio per l’ingresso in Italia dei
        cittadini extra-comunitari.
      </h3>
      <br />
      <p className={style.p}>
        Il servizio si rivolge a tutti coloro che intendono{" "}
        <strong>
          {" "}
          invitare in Italia amici o parenti dai paesi extracomunitari
        </strong>
        , sia che provengano da paesi con obbligo di visto d’ingresso che da
        paesi senza necessità di visto d’ingresso. Qualora l’invitato non
        usufruisca di una struttura alberghiera e soggiorni presso una{" "}
        <strong>abitazione privata</strong> dovrà essere in possesso di una
        <strong>
          {" "}
          dichiarazione di ospitalità-alloggio (ex lettera d’invito)
        </strong>{" "}
        correttamente compilata da presentare all’Ambasciata del paese di
        residenza ovvero, per i cittadini dei paesi esenti dall’obbligo di
        visto, alla dogana di ingresso in Area Schengen.
      </p>
      <h6 className={style.p}>
        La lettera dovrà essere compilata in modo corretto per evitare essere
        respinto dalle autorità competenti
      </h6>
      <hr className={style.hr}/>
    </div>
  );
}
