import React, { useState, useEffect } from "react";
import Select from "react-select";
import data from "../../../src/data.js";
import style from "../../componets/Searchbar/SearchBar.module.css";
import icono from '../../../src/imagenes/icono.png'

const SearchBar2 = () => {
  const [searchValue, setSearchValue] = useState("");
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    setAirports(data);
  }, []);

  const filterAirports = (inputValue) => {
    const filteredAirports = Array.isArray(airports)
      ? airports.filter((airport) => {
          const country = airport.country || "";
          const city = airport.city || "";
          const name = airport.name || "";
          const code = airport.code || "";

          return (
            country.toLowerCase().includes(inputValue.toLowerCase()) ||
            city.toLowerCase().includes(inputValue.toLowerCase()) ||
            name.toLowerCase().includes(inputValue.toLowerCase()) ||
            code.toLowerCase().includes(inputValue.toLowerCase())
          );
        })
      : [];

    return filteredAirports.map((airport) => ({
      label: `${airport.city} (${airport.code}) - ${airport.country}`,
      value: airport.code,
    }));
  };

  const formatOptionLabel = ({ label, value }) => (
    <div>
      <img src={icono} alt="Airplane icon" className={style.icono}/>
      <span>{label}</span>
    </div>
  );

  console.log(filterAirports(searchValue)); // imprime los resultados en la consola

  return (
    <Select
      className={style.input2}
      options={filterAirports(searchValue)}
      onInputChange={(inputValue) => setSearchValue(inputValue)}
      menuIsOpen={Boolean(searchValue)} // Establecer en `true` solo si `searchValue` tiene algún valor
      formatOptionLabel={formatOptionLabel}
      placeholder="DESTINAZIONE"
    />
  );
};

export default SearchBar2;
