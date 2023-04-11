import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from "../Searchbar/SearchBar.module.css"


const SearchBarData = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  
    return (
      <div className={style.data}>
       
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
        
          
          className={style.data2}
          placeholderText="DATA DI RITORNO"
          
        />
      </div>
    );
  };
  
  export default SearchBarData;