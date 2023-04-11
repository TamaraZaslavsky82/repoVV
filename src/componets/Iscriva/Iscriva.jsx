import React, { useState } from 'react';
import style from '../Iscriva/iscriva.module.css';
import avionb from '../../imagenes/avionb.webp';
import logo from '../../imagenes/logo.png';

export default function Iscriva() {
  const [email, setEmail] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const url = 'https://formspree.io/f/xnqyodzo';
    const options = {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    };
    const response = await fetch(url, options);
    if (response.ok) {
      setShowSuccessPopup(true);
      form.reset();
      setEmail('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const styles = {
    backgroundImage: `url(${avionb})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    marginTop:' -150px',
    marginBottom: '-20px',
    backgroundAttachment: 'fixed',
    position: 'relative',
    zIndex:'0,'
  };
  

  return (
    <div style={styles}>
      <div className={style.container1}>
        <h5>Cosa abbiamo in serbo per lei</h5>
        <br />
        <p>Offerte personalizzate e idee di viaggio</p>
        <p>Potrà cancellare la sua iscrizione in qualsiasi momento</p>
        <p>Non si preoccupi, non condivideremo mai i suoi dati con terzi</p>
      </div>
      <div className={style.container2}>
        <h4>Rimaniamo in contatto</h4>
        <p>Inviaci la tua email e ti contatteremo a breve</p>
        <form onSubmit={handleSubmit}>
          <input type="email" name="_replyto" placeholder="Inserisci la tua email" value={email} onChange={handleEmailChange} required />
          <button  className={style.boton}type="submit">Inviare</button>
        </form>
      </div>
      <div>
        <img src={logo} alt="logo" className={style.logo} />
      </div>
      {showSuccessPopup && (
        <div className={style.popup}>
          <h4>Il messaggio è stato inviato con successo, ti ricontatteremo il prima possibile!!</h4>
          <button  onClick={() => setShowSuccessPopup(false)} >Chiusura</button>
        </div>
      )}
      
    </div>
  );
}
