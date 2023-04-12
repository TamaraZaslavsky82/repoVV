import React from "react";
import style from "../Vistidingreso/visti.module.css";
import billete from "../../imagenes/billete.png";



export default function Vistidingreso() {
  return (
    <div>
      <h2 className={style.h2}>OTTENIMENTO VISTO POR CITTADINI EXTRACOMUNITARI</h2>
      <br />
      <h3 className={style.h3} >
        Fideiussione bancaria per invito turistico e ingresso in Italia degli
        stranieri extracomunitari esenti da obbligo di visto.
      </h3>
      <img src={billete} alt="billete" className={style.billete} />
      <br />
      <p className={style.p1}>
        <strong>
          
          La fideiussione bancaria (o assicurativa) è un documento richiesto
          allo straniero proveniente da Paesi extracomunitari esenti da obbligo
          di visto di breve durata alla dogana di ingresso in Area Schengen e/o
          all’aeroporto di partenza.
        </strong>
        Permette di dimostrare la disponibilità di mezzi finanziari che possano
        garantire il suo sostentamento durante il suo soggiorno in Italia o in
        area Schengen. La fideiussione deve essere richiesta dal cittadino
        italiano oppure dal cittadino straniero in possesso di regolare permesso
        di soggiorno che intende aiutare il suo ospite ad ottenere il Visto
        Turistico per l’Italia.
      </p>
      <br />
      <h4 className={style.h4}>ALLA DOGANA PUÒ VENIRE RICHIESTA ANCHE L’ESIBIZIONE DI:</h4>
      <ul className={style.ul1}>
        <li>assicurazione sanitaria Schengen.</li>
        <li>
          dichiarazione di alloggio (ex lettera d’invito) o dimostrazione
          dialloggio alberghiera.
        </li>
        <li>biglietto aereo di ritorno.</li>
      </ul>
      <br />
      <h3 className={style.h31}>CARATTERISTICHE DELLA FIDEIUSSIONE BANCARIA</h3>
      <br />
      <p className={style.p2}>
        La <strong> fideiussione bancaria </strong>prevede un importo a garanzia
        di 3.905 € a persona e consente di{" "}
        <strong> dimostrare la disponibilità dei mezzi di sussistenza</strong>{" "}
        come previsto dalla Direttiva del Ministero dell’Interno del 01 marzo
        2000,
        <strong>
          
          senza altro obbligo di presentare disponibilità di denaro contante.
        </strong>
        La fideiussione ha<strong> 6 mesi di validità</strong>, durante i quali
        si può soggiornare in area Schengen per <strong>30/60/90</strong> giorni
        a seconda della combinazione scelta. 
      </p>
      <h6 className={style.h6}>VANTAGGI</h6>
      <br />
      <ul className={style.ul2}>
        <li>
          <strong> Libertà:</strong> può essere utilizzata liberamente per visti
          multipli, ossia per più ingressi nell’arco dei 6 mesi.
        </li>
        <li>
          <strong>Flessibilità:</strong> non vincola la data di partenza e la
          data del rientro nell’arco dei 6 mesi
        </li>
        <li>
          <strong>Economicità:</strong> prezzo inferiore rispetto alle altre
          offerte presenti sul mercato.
        </li>
        <li>
          <strong>Garanzia:</strong> rispetta tutte le direttive del Codice
          Europeo dei Visti.
        </li>
      </ul>
      <br/>
      <hr className={style.hr}/>
    </div>
  );
}
