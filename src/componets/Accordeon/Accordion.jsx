
import React from 'react'
import {Link} from 'react-router-dom'
import style from '../Accordeon/Accordeon.module.css'


export default function Accordion() {
  return (
    <div>
    <div className={style.conteiner}>
      <h6>Coronavirus (COVID-19) Support</h6>
      <a>Get the advice you need. Check the latest COVID-19 restrictions before you travel.</a>
      <br/>
      <Link to='/learmore' >
      <a> Learn more</a>
      </Link>
    </div>

    </div>
  )
}

