import React, { useState } from "react";
import emailjs from "emailjs-com";
import style from "../Form/Form.module.css";

export default function Formulario({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mostrarVentanaEmergente, setMostrarVentanaEmergente] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, numero });

    setEmail("");
    setNumero("");

    // Enviar formulario con emailjs
    emailjs
      .sendForm(
        "service_l3h02kn",
        "template_ogy7cpb",
        e.target,
        "DR_fIQeDNC-1O55IS7deJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMensaje("Mensaje enviado con éxito");
        },
        (error) => {
          console.log(error.text);
          setMensaje("Error al enviar el mensaje");
        }
      );
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.nombre}>
          Email:&nbsp;
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={style.nombre}>
          Teléfono:&nbsp;
          <input
            type="number"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </label>
        <button className={style.boton} type="submit">
          Enviar
        </button>
      </form>
      {mostrarVentanaEmergente && (
        <div
          className={
            mensaje.includes("Error") ? style.errorWindow : style.successWindow
          }
        >
          <p
            className={mensaje.includes("Error") ? style.error : style.success}
          >
            {mensaje}
          </p>
          <button
            className={style.closeButton}
            onClick={() => setMostrarVentanaEmergente(false)}
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
}
