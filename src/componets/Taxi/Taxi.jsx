import React from 'react'
import bd from '../../imagenes/bd.webp'
import Form2  from  '../../componets/Form/Form2.jsx'
import '../../componets/Taxi/Taxi.css'

function Taxi() {
  return (
    <div>
        <img src={bd} className='foto'/>
        <p className='text'>Lasciaci un messaggio e ti contatteremo a breve.</p>
       <Form2/>
    </div>
  )
}

export default Taxi