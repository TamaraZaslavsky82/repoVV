import React from "react";
import style from "../Footer/Footer.module.css"

export default function Footer() {
  return (
    <div className={style.footer}>
      <p className={style.v}>Viaggi e Visti</p>
      <div className={style.datos}>
      <p>
        Datos de contacto
        <br />
        Direccion : Corso 22 Marzo 36 Milano/ Milan / Italy
        <br />
        Telefono : +39 02 9925 3838
        <br/>
        email: info@vuelosbaratoss.online
      </p>
      </div>
    < p className={style.derechos}>Derechos reservador Viaggi e Visti copy@2023 - Desarrollo web by Tamara Zaslavsky</p>
    </div>
  );
}
