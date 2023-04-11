import React, { useState, useEffect } from 'react';
import style from './SearchBar3.module.css';

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
      ? `${totalPassengers} ${totalPassengers === 1 ? 'passeggeri' : 'passeggeri'}`
      : 'Cantidad de pasajeros';

  return (
    <div >
    <div className={style.dropdown}>
      <div className={style.select} onClick={toggleMenu}>
        <span>{selectedText}</span>
        <i className={`fas fa-chevron-${menuOpen ? 'up' : 'down'}`}></i>
      </div>
      {menuOpen && (
        <div className={style.menu}>
          <label htmlFor="adults">Adultos:</label>
          <select
            id="adults"
            onChange={(event) => setAdults(parseInt(event.target.value))}
            value={adults}
            onClick={handleSelection}
          >
            {createOptions(10)}
          </select>
          <br />
          <label htmlFor="children">Niños:</label>
          <select
            id="children"
            onChange={(event) => setChildren(parseInt(event.target.value))}
            value={children}
            onClick={handleSelection}
          >
            {createOptions(10)}
          </select>
          <br />
          <label htmlFor="infants">Recién nacidos:</label>
          <select
            id="infants"
            onChange={(event) => setInfants(parseInt(event.target.value))}
            value={infants}
            onClick={handleSelection}
          >
            {createOptions(3)}
          </select>
          <br />
        </div>
      )}
    </div>
    </div>
  );
}

function createOptions(max) {
  max = parseInt(max);
  const options = [];
  for (let i = 0; i <= max; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return options;
}

export default SearchBar3;
