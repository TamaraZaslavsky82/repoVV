import React from 'react';
import bd from '../../imagenes/bd.webp';
import Form from '../../componets/Form/Form.jsx';
import '../../componets/Taxi/Taxi.css';

function Taxi() {
  return (
    <div>
      <img src={bd} className='foto' alt='Taxi' />
      <p className='text'>Lasciaci un messaggio e ti contatteremo a breve.</p>
      <div style={{marginLeft:'60px'}}><Form /></div>
      
    </div>
  );
}

export default Taxi;
