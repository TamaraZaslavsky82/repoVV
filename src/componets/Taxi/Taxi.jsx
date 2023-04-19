import React from 'react'
import bd from '../../imagenes/bd.webp'
import Form  from  '../../componets/Form/Form'
import '../../componets/Taxi/Taxi.css'

function Taxi() {
  return (
    <div>
        <img src={bd} className='foto'/>
        <p>Lasciaci un messaggio e ti contatteremo a breve.</p>
        <Form/>
    </div>
  )
}

export default Taxi