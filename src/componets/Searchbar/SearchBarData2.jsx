import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../componets/Searchbar/searchbar.css'

const SearchBarData = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
   
      <Form.Group controlId="formDate" >
        <Form.Label  style={{ color: 'rgb(250, 197, 21)' }}>RITORNO</Form.Label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Seleziona una data"
          className="custom-datepicker"
          
         
        />
      </Form.Group>
   
  );
};

export default SearchBarData;
