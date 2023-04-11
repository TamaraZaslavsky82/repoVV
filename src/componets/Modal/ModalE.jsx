import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import style from '../Modal/ModalE.module.css'

function ModalE() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleClose = () => setShowModal(false);

  return (
    <Modal   show={showModal} onHide={handleClose}>
      <Modal.Header  className={style.ventana}closeButton>
        <Modal.Title className={style.titulo} >En Vuelos Baratos usamos cookies para asegurar la mejor experiencia en nuestra web.</Modal.Title>
      </Modal.Header>
      <Modal.Body className={style.ventana}>
        Acepta las condiciones para continuar tu navegacion.
        <input  className={style.checkbox} type= 'checkbox' />
      </Modal.Body>
      <Modal.Footer className={style.ventana}>
        <Button className={style.cerrar} variant="primary" onClick={handleClose}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalE;
