import React, { useState } from "react";
import style from "./SearchBar3.module.css";

function SearchBar3() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleSelection() {
    setMenuOpen(false);
  }

  const totalPassengers = adults + children + infants;
  const selectedText =
    totalPassengers > 0
      ? `${totalPassengers} ${
          totalPassengers === 1 ? "Passeggero" : "PASSEGGERI"
        }`
      : "PASSEGGERI";

  return (
    <div>
      <div className={style.dropdown}>
        <div className={style.select} onClick={toggleMenu}>
          <span className={style.selectedText}>{selectedText}</span>
        </div>
        {menuOpen && (
          <div className={style.menu}>
            <div className={style.menuItem}>
              <label htmlFor="adults" className={style.texto}>Adulti <p className={style.passager}>Più di 11 anni</p> </label>
              <div className={style.buttonsContainer}>
                <button
                  className={style.button}
                  onClick={() => setAdults(Math.max(adults - 1, 0))}
                >
                  -
                </button>
                <span className={style.number}>{adults}</span>
                <button
                  className={style.button}
                  onClick={() => setAdults(adults + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className={style.menuItem}>
              <label htmlFor="children" className={style.texto}>Bambini <p className={style.passager}>Da 2 a 11 anni</p> </label>
              <div className={style.buttonsContainer}>
                <button
                  className={style.button}
                  onClick={() => setChildren(Math.max(children - 1, 0))}
                >
                  -
                </button>
                <span className={style.number}>{children}</span>
                <button
                  className={style.button}
                  onClick={() => setChildren(children + 1)}
                >
                +
                </button>
              </div>
            </div>
            <div className={style.menuItem}>
              <label htmlFor="infants" className={style.texto}>Neonato <p className={style.passager}>Meno di 2 anni</p> </label>
              <div className={style.buttonsContainer}>
                <button
                  className={style.button}
                  onClick={() => setInfants(Math.max(infants - 1, 0))}
                >
                  -
                </button>
                <span className={style.number}>{infants}</span>
                <button
                  className={style.button}
                  onClick={() => setInfants(infants + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar3;
