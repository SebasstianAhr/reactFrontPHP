import React from "react";
import "./agregar.css";

export default function Agregar() {
  return (
    <div className="container-form">
      <h2>Agregar</h2>
      <p>Agrega tus productos nuevos aqui:</p>
      <form className="agregar-form">
        <div className="label-input">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre"/>
        </div>
        <div className="label-input">
          <label htmlFor="descripcion">Descripcion:</label>
          <input type="text" id="descripcion"/>
        </div>
        <div className="div-button">
          <button className="button-cancelar">Cancelar</button>
          <button className="button-agregar">Agregar</button>
        </div>
      </form>
    </div>
  );
}
