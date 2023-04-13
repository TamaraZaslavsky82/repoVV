import React, { useState } from "react";
import emailjs from "emailjs-com";
import style from "../Form/Form.module.css"

export default function Formulario({ onSubmit }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, email, numero });
    setNombre("");
    setEmail("");
    setNumero("");

    // Configurar EmailJS
    emailjs.sendForm("service_l3h02kn", "template_ogy7cpb", e.target, "DR_fIQeDNC-1O55IS7deJ")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label className={style.nombre}>
        Nombre:&nbsp;
        <input  type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label className={style.nombre}>
        Email:&nbsp;
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className={style.nombre}>
        Teléfono:&nbsp;
        <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} />
      </label>
      <button className={style.boton} type="submit">Enviar</button>
    </form>
  );
}
