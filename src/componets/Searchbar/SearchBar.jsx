import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import data from "../../../src/data.js";
import style from "../../componets/Searchbar/SearchBar.module.css";
import icono from '../../../src/imagenes/icono.png'

const SearchBar = () => {
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
    <Form>
      <Form.Group controlId="formBasicSelect">
        <Form.Label style={{ color: 'rgb(250, 197, 21)' }}>PARTENZA</Form.Label>
        <Select
          options={filterAirports(searchValue)}
          onInputChange={(inputValue) => setSearchValue(inputValue)}
          menuIsOpen={Boolean(searchValue)}
          formatOptionLabel={formatOptionLabel}
          placeholder="Select an airport"
        />
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
