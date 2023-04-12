import React from "react";
import './Estilo.css';

function Header() {
  return (
    <header>
      <div className="bloque_encabezado">
        <img id="logo" src="usuario.jpg" alt="Logo" />
        <h4>A01275122</h4>
        <h2>Salma Isabel Martínez Calderón</h2>
      </div>
      <div className="bloque_encabezado">
        <input id="busqueda" type="search" placeholder="Teclea tu búsqueda" />
        <button id="boton" type="button">
          SALIR
        </button>
      </div>
      <div className="botones_arriba">
        <button type="button">ITEM 1</button>
        <button type="button">ITEM 2</button>
        <button type="button">ITEM 3</button>
        <button type="button">ITEM 4</button>
        <button type="button">ITEM 5</button>
        <button type="button">ITEM 6</button>
        <button type="button">ITEM 7</button>
      </div>
    </header>
  );
}

export default Header;
