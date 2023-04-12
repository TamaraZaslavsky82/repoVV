import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Searchbar/SearchBar";
import style from "../Voil1/Voil1.module.css";
import SearchBarData from "../Searchbar/SearchBarData";
import SearchBar2 from "../Searchbar/SearchBar2";
import SearchBarData2 from "../Searchbar/SearchBarData2";
import SearchBar3 from "../Searchbar/SearchBar3";

export default function Voil() {
  const [soloAndataChecked, setSoloAndataChecked] = useState(false);
  const [andataERitornoChecked, setAndataERitornoChecked] = useState(false);

  const handleSoloAndataChange = () => {
    setSoloAndataChecked(!soloAndataChecked);
    if (andataERitornoChecked) {
      setAndataERitornoChecked(false);
    }
  };

  const handleAndataERitornoChange = () => {
    setAndataERitornoChecked(!andataERitornoChecked);
    if (soloAndataChecked) {
      setSoloAndataChecked(false);
    }
  };

  return (
    <div>
      <div className={style.container}>
        <div >
          <label className={style.cheack2}>
            <input
              type="checkbox"
              checked={soloAndataChecked}
              onChange={handleSoloAndataChange}
            />
            Solo Andata
          </label>
        </div>
        <div className={style.containerC}>
          <label className={style.cheack1}>
            <input
              type="checkbox"
              checked={andataERitornoChecked}
              onChange={handleAndataERitornoChange}
            />
            Andata e ritorno
          </label>
        </div>
        <div className={style.search1}>
          <SearchBar />
        </div>

        <div className={style.search}>
          <SearchBar2 />
        </div>
        <div className={style.datar}>
          <SearchBarData />
        </div>
        <div className={style.dataa}>
          <SearchBarData2 />
        </div>
        <div className={style.data3}>
          <SearchBar3 />
        </div>
        <div className={style.cerca}>
<button className={style.button}>Cerca</button>
</div>
      </div>

      <h2 className={style.text}>È alla ricerca di offerte speciali??</h2>
      <br />
      <p className={style.p1}>
        Si iscriva qui per ricevere offerte personalizzate e idee di viaggio
        direttamente nella sua casella di posta elettronica.
      </p>
      <Link to='/iscriva'>
<button className={style.button2}>
  iscriva
</button>
</Link>
      <br />

      <h4 className={style.h4}>BISOGNO DI AIUTO PER LA PRENOTAZIONE?</h4>
      <div className={style.p2}>
        <p>Assistenza telefonica: (+39) 02 99253838</p>
        <p>
          <strong>Lingue parlate:</strong> Italiano – Inglese -Spagnolo
        </p>
        <p>
          <strong>Da lunedì a Sabato (10:00 - 20:00)</strong>
        </p>
      </div>
      <br />
    </div>
  );
}
