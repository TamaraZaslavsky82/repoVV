import React from "react";
import turismo from "../../imagenes/turismo.png";
import style from '../Assicurazione/Assicurazione.module.css';

export default function Assicurazione() {
  return (
    <div>
      <h2 className={style.h2}>Assicurazione di viaggio per turismo/visto d’ingresso.</h2>
      <img src={turismo} className={style.turismo} alt="turismo" />
      <p className={style.p1}>
        <strong>
          {" "}
          L’assicurazione di viaggio per stranieri soddisfa le esigenze dei
          cittadini extra-UE che vengono in Italia o nello Spazio Schengen per
          un soggiorno di breve durata (non oltre i 90 giorni nel semestre).
        </strong>
        <br />
        L’articolo 15 del Regolamento Europeo n.810/2009 “CODICE DEI VISTI”
        stabilisce che i richiedenti di un visto Schengen devono dimostrare di
        possedere un adeguata polizza assicurativa per cure mediche e ricovero
        ospedaliero a seguito di infortunio o malattia e spese di rimpatrio, per
        il periodo di soggiorno, con una copertura minima di 30.000 €, valida
        per il territorio nazionale ed estesa allo Spazio Schengen.
        L’assicurazione sanitaria per stranieri è un documento necessario ai
        fini del rilascio del visto di ingresso e può essere stipulata presso le
        compagnie assicurative.{" "}
        <strong>
          L’assicurazione può essere contratta in Italia dalla persona che
          invita.
        </strong>
      </p>
      <br />
      <h3 className={style.h3}>Prenotazione volo per visto</h3>
      <br />
      <p className={style.p1}>
        La nostra <strong> prenotazione aerea </strong>potrà essere confermata o annullata senza
        alcun costo aggiuntivo. Consente di esibire quanto richiesto in sede di
        presentazione della domanda e <strong>non obbliga all’acquisto del biglietto.</strong>
        Trattandosi di una prenotazione aperta, fino al momento della conferma
        del biglietto non è possibile avere la certezza del prezzo e la conferma
        del posto. Il successivo biglietto dovrà essere acquistato, dopo il
        rilascio del visto e potrà essere acquistato, liberamente, dove si
        desidera. La prenotazione volo è un servizio già compreso nei nostri
        pacchetti di <strong>Servizio Visti Completi </strong>oppure è acquistabile come servizio
        opzionale ove indicato.
      </p>

      <br></br>
      <hr className={style.hr}/>
    </div>
  );
}
