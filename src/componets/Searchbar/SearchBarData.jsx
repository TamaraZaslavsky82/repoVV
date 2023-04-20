import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from "../Searchbar/SearchBar.module.css";

const SearchBarData = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    
      <Form.Group controlId="formDate" >
        <Form.Label  style={{ color: 'rgb(250, 197, 21)' }}> ANDATA</Form.Label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Seleziona una data"
          
        />
      </Form.Group>
    
  );
};

export default SearchBarData;
