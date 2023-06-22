import React from "react";
import hotel from "../../imagenes/hotel.png";
import style from "../../componets/Hotel/Hotel.module.css";
import Form from "../../componets/Form/Form.jsx";

function Hotel() {
  return (
    <div>
      <img src={hotel} alt="" className={style.foto} />
      <h2 className={style.p}>Trova l'alloggio che fa per te</h2>
      <h5 className={style.p}>Cerca offerte su hotel, case e tanto altro...</h5>
      <br/>
      <p className={style.p}>Inviaci un messaggio e ti contatteremo a breve</p>
  
    <div className={style.form2}>  <Form /></div>
    </div>
  );
}

export default Hotel;
