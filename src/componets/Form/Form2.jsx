import React, { useState } from "react";
import emailjs from "emailjs-com";
import style from "../Form/Form2.module.css";

export default function Formulario() {
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mostrarVentanaEmergente, setMostrarVentanaEmergente] = useState(
    false
  );

  const handleSubmit = (e) => {
    e.preventDefault();

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
          setMostrarVentanaEmergente(true);

          setEmail("");
          setNumero("");
        },
        (error) => {
          console.log(error.text);
          setMensaje("Error al enviar el mensaje");
          setMostrarVentanaEmergente(true);

          setEmail("");
          setNumero("");
        }
      );
  };

  return (
    <div className={style.formContainer2}>
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
            mensaje.includes("Error")
              ? `${style.errorWindow} ${style.show}`
              : `${style.successWindow} ${style.show}`
          }
        >
          <p
            className={
              mensaje.includes("Error")
                ? `${style.error} ${style.show}`
                : `${style.success} ${style.show}`
            }
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
