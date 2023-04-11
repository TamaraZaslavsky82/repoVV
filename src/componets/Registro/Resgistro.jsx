import React, { useState } from 'react';
import style from '../Registro/Registro.module.css'
import logo from '../../imagenes/logo.png'
import { Link }  from  'react-router-dom'

function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una API o realizar cualquier acción que necesites
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  }

  return (
    <div className={`${style.container} ${style.contenedor}`}>
       <Link to={'/'}>
            <img src={logo} alt='logo' className={style.logo} />
            </Link>
       
            <p className={style.texto}>
            Benvenuto su Voli economici.
Inserisci i tuoi dati per avviare la registrazione dell'utente. Goditi un'esperienza unica. Scopri di più sulla nostra vasta gamma di servizi
</p>
        
    
    <form className={style.form} onSubmit={handleSubmit}>
      <label>
        Nombre&nbsp; 
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <label>
        Apellido &nbsp;
        <input type="text" value={apellido} onChange={handleApellidoChange} />
      </label>
      <label>
        Telefono  &nbsp;
        <input type='number' value={telefono} onChange={handleTelefonoChange} />
      </label>
      <label>
        Email&nbsp;
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Contraseña &nbsp;
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button  className={style.registro} type="submit">Registrarse</button>
    </form>
 
    </div>
  );
}

export default Registro;
