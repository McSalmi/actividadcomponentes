import React from "react";
import './Estilo.css';

class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    obtenerNombre() {
      return this.nombre;
    }
  
    establecerNombre(nuevoNombre) {
      this.nombre = nuevoNombre;
    }
  
    obtenerPrecio() {
      return this.precio;
    }
  
    establecerPrecio(nuevoPrecio) {
      this.precio = nuevoPrecio;
    }
  
    toString() {
      return `${this.nombre} - $${this.precio}`;
    }
  }
  
  export default Producto;

  