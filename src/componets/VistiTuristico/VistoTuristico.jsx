import React from "react";
import foto3 from "../../imagenes/foto3.png";
import style from '../../componets/VistiTuristico/VistoTuristico.module.css'

export default function VistoTuristico() {
  return (
    <div>
      <h2 className={style.h2}>
        Visto Turistico per l’invito dei cittadini extracomunitari in Italia
      </h2>
      <br />
      <img src={foto3}  alt="visto" className={style.visto}/>
      <br />
      <h4 className={style.h4}>
        SERVIZIO COMPLETO PER LA RICHIESTA DI CONCESSIONE DEL VISTO TURISTICO DI
        BREVE DURATA (MAX 90 GIORNI) DEGLI STRANIERI EXTRACOMUNITARI.
      </h4>
      <br />
      <p className={style.p1}>
        Abbiamo predisposto un servizio tutto compreso di fideiussione bancaria,
        polizza sanitaria, prenotazione volo, lettera d’invito, documentazione,
        necessaria per la richiesta di concessione del visto turistico e
        consulenza telefonica per l’ottenimento del visto. Se pensi che la
        normativa e la burocrazia sono complicate e vuoi essere sicuro di non
        commettere errori, lascia a noi esperti guidarti durante tutta la
        procedura. Con questo servizio ti guideremo passo-passo in tutta la
        pratica liberandoti dai dubbi, dalle incertezze e dagli errori formali,
        la causa più frequente di diniego del visto.
      </p>
      <br />
      <h3 className={style.h3}>LA TARIFFA COMPRENDE:</h3>
      <ul className={style.h3}>
        <li>La Fideiussione Bancaria.</li>
        <li>La Polizza Sanitaria area Schengen.</li>
        <li>
          La prenotazione volo aereo senza obbligo di acquisto del biglietto.
        </li>
        <li>La compilazione della lettera d’invito.</li>
        <li>Compilazione della documentazione per l’Ambasciata Italiana.</li>
        <li>La consulenza telefonica per l’ottenimento del visto.</li>
        <li>La verifica preliminare dei documenti in Italia.</li>
        <li>
          La spedizione entro 48 ore dalla ricezione del pagamento e dei
          documenti necessari.{" "}
        </li>
        <li>Prenotazione dell’appuntamento all’Ufficio Visti.</li>
      </ul>
      <br />
      <h3 className={style.h3}>IL SERVIZIO NON COMPRENDE:</h3>
      <ul className={style.ul}>
        <li className={style.li}>
          La tassa consolare di 90€ richiesta per il rilascio del Visto Turismo
          visita familiari/amici (non prevista per i familiari diretti di
          cittadini UE residenti in Italia) .
        </li>
        <li>Il biglietto aereo.</li>
        <li>Le eventuali spese di traduzione e legalizzazione documenti.</li>
        <li className={style.li}>
          Le eventuali spese di segreteria richieste dai Centri Visti esterni
          incaricati dalle Ambasciate (es: VFS, TSLcontact).
        </li>
      </ul>
      <br />
      <h3 className={style.h3}>DOCUMENTI RICHIESTI:</h3>
      <h4 className={style.h3}>CONTRAENTE (COLUI CHE INVITA).</h4>
      <br />
      <ul className={style.ul}>
        <li>
          Copia di due documenti d’identità (es: carta d’identità e passaporto o
          patente)
        </li>
        <li>
          Copia permesso di soggiorno (solo se cittadino straniero residente in
          Italia).
        </li>
        <li>
          Autocertificazione di reddito personale o familiare (visualizza)
          oppure di una terza persona.
        </li>
        <li>Busta paga o Cud.</li>
      </ul>
      <br />
      <h3 className={style.h31}>BENEFICIARIO (CITTADINO STRANIERO INVITATO).</h3>
      <ul className={style.ul}>
        <li>Copia passaporto (pagina della foto);</li>
      </ul>
      <br />
      <h6 className={style.h6}>
        NON SONO RICHIESTI DEPOSITI CAUZIONALI IN DENARO. NON È RICHIESTA
        L’APERTURA DI CONTO CORRENTE. NON È RICHIESTO LO SVINCOLO DELLA
        FIDEIUSSIONE AL TERMINE DEL PERIODO DI GARANZIA.
      </h6>
      <br />
      <h4 className={style.h41}>DOCUMENTAZIONE CONTRATTUALE</h4>
      <br />
      <h2 className={style.h21}>
        RECAPITO DOCUMENTI ALL’ESTERO: A PARTIRE DA 69 € (SERVIZIO OPZIONALE)
      </h2>
      <br />
      <p className={style.p1}>
        {" "}
        Completamento della pratica proponiamo il servizio di spedizione con
        tariffa convenzionata. Il servizio prevede la spedizione all’estero dei
        documenti con corriere espresso DHL all’indirizzo dell’invitato o ad
        altro indirizzo concordato
      </p>
      <hr className={style.hr}/>
    </div>
  );
}
