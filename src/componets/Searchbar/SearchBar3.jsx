import React, { useState, useRef, useEffect } from "react";
import { Dropdown, Button } from "react-bootstrap";
import style from "./SearchBar.module.css";

function SearchBar3() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const menuRef = useRef(null);

  function handleClickOutside(event) {
    if (
      menuOpen &&
      containerRef.current &&
      !containerRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const totalPassengers = adults + children + infants;

  return (
    <div ref={containerRef}>
      <button style={{borderRadius: '5px', marginLeft: '-25px', backgroundColor:'white', marginTop:'2px', padding:'7px'}} onClick={() => setMenuOpen(!menuOpen)}>
        <span>{totalPassengers > 0 ? `${totalPassengers} ` : ""}</span>
        <span>Passeggeri{totalPassengers === 1 ? "" : "s"}</span>
      </button>
      {menuOpen && (
        <Dropdown show={menuOpen} onToggle={(isOpen) => setMenuOpen(isOpen)}>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            <span>{totalPassengers > 0 ? `${totalPassengers} ` : ""}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className={style.menu} ref={menuRef}>
            <div className={style.menuItem}>
              <label htmlFor="adults" className={style.texto}>
                Adulti <p className={style.passager}>Più di 11 anni</p>{" "}
              </label>
              <div className={style.buttonsContainer}>
                <Button
                  className={style.button}
                  variant="secondary"
                  onClick={() => setAdults(Math.max(adults - 1, 0))}
                >
                  -
                </Button>
                <span className={style.number}>{adults}</span>
                <Button
                  className={style.button}
                  variant="secondary"
                  onClick={() => setAdults(adults + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            <div className={style.menuItem}>
              <label htmlFor="children" className={style.texto}>
                Bambini <p className={style.passager}>Da 2 a 11 anni</p>{" "}
              </label>
              <div className={style.buttonsContainer}>
                <Button
                  className={style.button}
                  variant="secondary"
                  onClick={() => setChildren(Math.max(children - 1, 0))}
                >
                  -
                </Button>
                <span className={style.number}>{children}</span>
                <Button
                  className={style.button}
                  variant="secondary"
                  onClick={() => setChildren(children + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            <div className={style.menuItem}>
              <label htmlFor="children" className={style.texto}>
                Bambini <p className={style.passager}>Da 0 a 12 mes</p>{" "}
              </label>
              <div className={style.buttonsContainer}>
                <Button
                  className={style.button}
                  variant="secondary"
                  onClick={() => setInfants(Math.max(infants - 1, 0))}
                >
                  -
                </Button>
                <span className={style.number}>{infants}</span>
                <Button
                  className={style.button}
                  variant="secondary"
                  onClick={() => setInfants(infants + 1)}
                >
                  +
                </Button>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
}

export default SearchBar3;
