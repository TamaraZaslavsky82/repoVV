import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from "../Searchbar/SearchBar.module.css";

const SearchBarData = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={style.data}>
      <Form.Group controlId="formDate" className={style.formGroup}>
        <Form.Label className={style.formLabel} style={{ color: 'rgb(250, 197, 21)' }}>RITORNO</Form.Label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Seleziona una data"
          className={style.formControl}
        />
      </Form.Group>
    </div>
  );
};

export default SearchBarData;
