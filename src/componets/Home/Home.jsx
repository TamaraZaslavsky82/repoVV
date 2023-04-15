import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ModalE from "../Modal/ModalE.jsx";
import Accordion from "../Accordeon/Accordion.jsx"
import style from "../Home/Home.module.css";
import foto1 from "../../imagenes/foto1.png"
import foto2 from "../../imagenes/foto2.png";
import foto3 from "../../imagenes/foto3.png";
import { Link } from "react-router-dom";
import passaporte from "../../imagenes/passaporte.jpg";
import google from "../../imagenes/google.png" 
import insignia from "../../imagenes/insignia.png";

export default function home() {
  return (
    <div>
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators" style={{ bottom: "0" }}>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{ backgroundColor: "rgb(53, 53, 51)" }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{ backgroundColor: "rgb(53, 53, 51)" }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              style={{ backgroundColor: "rgb(53, 53, 51)" }}
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={foto1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5></h5>
                <p>
                  <Link
                    to="/seccion1"
                    style={{
                      backgroundColor: "#99A3A4",
                      padding: "10px",
                      borderRadius: " 5px",
                      color: "white",
                      textDecorationLine: "none",
                    }}
                  >
                    Traduzione
                  </Link>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={foto2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5></h5>
                <p>
                  <Link
                    to="/seccion1"
                    style={{
                      backgroundColor: "#99A3A4",
                      padding: "10px",
                      borderRadius: " 5px",
                      color: "white",
                      textDecorationLine: "none",
                  
                    }}
                  >
                    Voil
                  </Link>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={foto3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <p>
                  <Link
                    to="/vistidingreso"
                    style={{
                      backgroundColor: "#99A3A4",
                      padding: "10px",
                      borderRadius: " 5px",
                      color: "white",
                      textDecorationLine: "none",
                    
                    }}
                  >
                    Visti d'ingreso
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            style={{
              backgroundColor: "rgb(53, 53, 51)",
              width: " 50px ",
          
            }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            style={{
              backgroundColor: "rgb(53, 53, 51)",
              width: " 50px  ",
            
            }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
     
          </button>
        </div>
      </div>
      <Accordion />
      <div className={style.home1}>
        <p>
          Servizio visti turistici, servizi assicurativi e finanziari
          professionali, rapidi ed economici.
          <br></br>
          <br></br>
          Siamo specializzati nel rilascio dei documenti per ottenere il visto
          di ingresso in Italia, delle assicurazioni sanitarie e delle
          fideiussioni per stranieri e cittadini comunitari che desiderano
          soggiornare in Italia e necessitano delle coperture assicurative
          imposte dalla legge.
        </p>
      </div>

      <hr className={style.linea} />
      <h5 className={style.centinaia}>
        Centinaia di recensioni positive. Scopri anche tu i giudizi dei nostri
        clienti!
      </h5>
      <img src={google} alt="google" className={style.google} />
      <img src={insignia} alt="insignia" className={style.insignia} />
    </div>
  );
}
